import {stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";
import {profileAPI} from "../API/profile-api";
import {BaseThunkType, InferActionsTypes} from "./reduxStore";
import {FormAction} from "redux-form/lib/actions";

const ADD_POST = "PROFILE/ADD_POST";
const SET_USERS_PROFILE = "PROFILE/SET_USERS_PROFILE";
const SET_STATUS = "PROFILE/SET_STATUS";
const DELETE_POST = "PROFILE/DELETE_POST";
const SAVE_PHOTOS_SUCCESS = "PROFILE/SAVE_PHOTOS_SUCCESS";

const initialState = {
  posts: [
    {id: 1, message: "Hi, how are you?", likesCount: 52},
    {id: 2, message: "Its my first post.", likesCount: 25},
    {id: 3, message: "Hi, man", likesCount: 45},
    {id: 4, message: "The post.", likesCount: 21},
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: "",
};


export const profileReducer = (
    state = initialState,
    action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    }

    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    }

    case SET_USERS_PROFILE: {
      return { ...state, profile: action.profile };
    }

    case SET_STATUS: {
      return { ...state, status: action.status };
    }

    case SAVE_PHOTOS_SUCCESS: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      };
    }

    default:
      return state;
  }
};

export const actions = {
  addPostActionCreator: (newPostText: string) => ({type: ADD_POST, newPostText: newPostText,} as const),
  deletePost: (postId: number) => ({type: DELETE_POST, postId,} as const),
  setUsersProfile: (profile: ProfileType) => ({type: SET_USERS_PROFILE, profile,} as const),
  setStatus: (status: string) => ({type: SET_STATUS, status,} as const),
  savePhotoSuccess: (photos: PhotosType) => ({type: SAVE_PHOTOS_SUCCESS, photos,} as const)
}


export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
  const response = await profileAPI.getProfile(userId);
  dispatch(actions.setUsersProfile(response));
};

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
  const response = await profileAPI.getStatus(userId);
  dispatch(actions.setStatus(response));
};

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
  const response = await profileAPI.updateStatus(status);
  if (response.resultCode === 0) {
    dispatch(actions.setStatus(status));
  }
};
export const savePhoto = (file: File): ThunkType => async (dispatch) => {
  const response = await profileAPI.savePhoto(file);
  if (response.resultCode === 0) {
    dispatch(actions.savePhotoSuccess(response.data.photos));
  }
};

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(profile);
  if (response.resultCode === 0) {
    if (userId !== null) {
      dispatch(getUserProfile(userId));
    } else {
      throw new Error("userId can't be null")
    }
  } else {
    dispatch(stopSubmit("edit-profile", {_error: response.messages[0]}));
    return Promise.reject(response.messages[0]);
  }
};

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>