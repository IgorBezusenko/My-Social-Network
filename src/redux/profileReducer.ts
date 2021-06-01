import { stopSubmit } from "redux-form";
import { PhotosType, PostType, ProfileType } from "../types/types";
import {profileAPI} from "../API/profile-api";

const ADD_POST = "ADD_POST";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTOS_SUCCESS = "SAVE_PHOTOS_SUCCESS";

const initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 52 },
    { id: 2, message: "Its my first post.", likesCount: 25 },
    { id: 3, message: "Hi, man", likesCount: 45 },
    { id: 4, message: "The post.", likesCount: 21 },
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: "",
};

export type InitialStateType = typeof initialState;

export const profileReducer = (
  state = initialState,
  action: any
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

type AddPostActionCreatorActionType = {
  type: typeof ADD_POST;
  newPostText: string;
};
export const addPostActionCreator = (
  newPostText: string
): AddPostActionCreatorActionType => ({
  type: ADD_POST,
  newPostText,
});

type DeletePostActionType = {
  type: typeof DELETE_POST;
  postId: number;
};
export const deletePost = (postId: number): DeletePostActionType => ({
  type: DELETE_POST,
  postId,
});

type SetUsersProfileActionType = {
  type: typeof SET_USERS_PROFILE;
  profile: ProfileType;
};
export const setUsersProfile = (
  profile: ProfileType
): SetUsersProfileActionType => ({
  type: SET_USERS_PROFILE,
  profile,
});

type SetStatusActionType = {
  type: typeof SET_STATUS;
  status: string;
};
export const setStatus = (status: string): SetStatusActionType => ({
  type: SET_STATUS,
  status,
});

type SavePhotoSuccessActionType = {
  type: typeof SAVE_PHOTOS_SUCCESS;
  photos: PhotosType;
};
export const savePhotoSuccess = (
  photos: PhotosType
): SavePhotoSuccessActionType => ({
  type: SAVE_PHOTOS_SUCCESS,
  photos,
});

export const getUserProfile = (userId: number) => async (dispatch: any) => {
  const response = await profileAPI.getProfile(userId);
  dispatch(setUsersProfile(response));
};

export const getStatus = (userId: number) => async (dispatch: any) => {
  const response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response));
};

export const updateStatus = (status: string) => async (dispatch: any) => {
  const response = await profileAPI.updateStatus(status);
  if (response.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
export const savePhoto = (file: any) => async (dispatch: any) => {
  const response = await profileAPI.savePhoto(file);
  if (response.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.photos));
  }
};

export const saveProfile = (profile: ProfileType) => async (
  dispatch: any,
  getState: any
) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(profile);
  if (response.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    dispatch(stopSubmit("edit-profile", { _error: response.messages[0] }));
    return Promise.reject(response.messages[0]);
  }
};
