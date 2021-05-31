import {usersAPI} from "../API/api";
import {updateObjectInArray} from "../components/utils/object-helpers";
import {PhotosType, ResultCodesEnum} from "../types/types";
import {InferActionsTypes} from "./reduxStore";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

export type UsersType = {
  id: number;
  name: string;
  status: string;
  photos: PhotosType;
  followed: boolean;
};

const initialState = {
  users: [] as Array<UsersType>,
  pageSize: 10,
  totalUsersCount: 100,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>, // userId
};

type InitialStateType = typeof initialState;

export const usersReducer = (
  state = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };

    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.toggleIsFetching,
      };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFollowing
            ? [...state.followingInProgress, action.userId]
            : state.followingInProgress.filter((id) => id !== action.userId),
      };

    default:
      return state;
  }
};

export const actions = {
  followSuccess: (userId: number) => ({type: FOLLOW, userId,} as const),
  unfollowSuccess: (userId: number) => ({type: UNFOLLOW, userId,} as const),
  setUsers: (users: Array<UsersType>) => ({type: SET_USERS, users,} as const),
  setCurrentPage: (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage,} as const),
  setTotalUsersCount: (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount,} as const),
  toggleIsFetching: (toggleIsFetching: boolean) => ({type: TOGGLE_IS_FETCHING, toggleIsFetching,} as const),
  toggleFollowingProgress: (isFollowing: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFollowing,
    userId,
  } as const),

}

type ActionType = InferActionsTypes<typeof actions>

export const getUsers = (currentPage: number, pageSize: number) => async (
    dispatch: any
) => {
  dispatch(actions.toggleIsFetching(true));
  dispatch(actions.setCurrentPage(currentPage));
  const data = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(actions.toggleIsFetching(false));
  dispatch(actions.setUsers(data.items));
  dispatch(actions.setTotalUsersCount(data.totalCount));
};

const followUnfollowFlow = async (
  dispatch: any,
  userId: number,
  apiMethod: any,
  actionCreator: any
) => {
  dispatch(actions.toggleFollowingProgress(true, userId));
  const response = await apiMethod(userId);
  if (response.data.resultCode === ResultCodesEnum.Success) {
    dispatch(actionCreator(userId));
  }
  dispatch(actions.toggleFollowingProgress(false, userId));
};

export const follow = (userId: number) => async (dispatch: any) => {
  let apiMethod = usersAPI.follow.bind(usersAPI);
  followUnfollowFlow(dispatch, userId, apiMethod, actions.followSuccess);
};

export const unfollow = (userId: number) => async (dispatch: any) => {
  let apiMethod = usersAPI.unfollow.bind(usersAPI);
  followUnfollowFlow(dispatch, userId, apiMethod, actions.unfollowSuccess);
};
