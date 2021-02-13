import { usersAPI } from "../API/api";
import { updateObjectInArray } from "../components/utils/object-helpers";
import { PhotosType } from "../types/types";

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
  action: any
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

type FollowSuccessType = { type: typeof FOLLOW; userId: number };
export const followSuccess = (userId: number): FollowSuccessType => ({
  type: FOLLOW,
  userId,
});

type UnFollowSuccessActionType = { type: typeof UNFOLLOW; userId: number };
export const unfollowSuccess = (userId: number): UnFollowSuccessActionType => ({
  type: UNFOLLOW,
  userId,
});

type SetUsersActionType = { type: typeof SET_USERS; users: Array<UsersType> };
export const setUsers = (users: Array<UsersType>): SetUsersActionType => ({
  type: SET_USERS,
  users,
});

type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE;
  currentPage: number;
};
export const setCurrentPage = (
  currentPage: number
): SetCurrentPageActionType => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

type SetTotalUsersCountActionType = {
  type: typeof SET_TOTAL_USERS_COUNT;
  totalUsersCount: number;
};
export const setTotalUsersCount = (
  totalUsersCount: number
): SetTotalUsersCountActionType => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount,
  };
};

type ToggleIsFetchingActionType = {
  type: typeof TOGGLE_IS_FETCHING;
  toggleIsFetching: boolean;
};
export const toggleIsFetching = (
  toggleIsFetching: boolean
): ToggleIsFetchingActionType => {
  return {
    type: TOGGLE_IS_FETCHING,
    toggleIsFetching,
  };
};

type ToggleFollowingProgressActionType = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS;
  isFollowing: boolean;
  userId: number;
};
export const toggleFollowingProgress = (
  isFollowing: boolean,
  userId: number
): ToggleFollowingProgressActionType => {
  return {
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFollowing,
    userId,
  };
};

export const getUsers = (currentPage: number, pageSize: number) => async (
  dispatch: any
) => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(currentPage));
  const data = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
};

const followUnfollowFlow = async (
  dispatch: any,
  userId: number,
  apiMethod: any,
  actionCreator: any
) => {
  dispatch(toggleFollowingProgress(true, userId));
  const response = await apiMethod(userId);
  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

export const follow = (userId: number) => async (dispatch: any) => {
  let apiMethod = usersAPI.follow.bind(usersAPI);
  followUnfollowFlow(dispatch, userId, apiMethod, followSuccess);
};

export const unfollow = (userId: number) => async (dispatch: any) => {
  let apiMethod = usersAPI.unfollow.bind(usersAPI);
  followUnfollowFlow(dispatch, userId, apiMethod, unfollowSuccess);
};
