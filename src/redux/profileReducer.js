import { profileAPI } from "../API/api";

const ADD_POST = "ADD_POST";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

const initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 52 },
    { id: 2, message: "Its my first post.", likesCount: 25 },
    { id: 3, message: "Hi, man", likesCount: 45 },
    { id: 4, message: "The post.", likesCount: 21 },
  ],
  profile: null,
  status: "",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newpost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newpost],
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

    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => {
  return {
    type: ADD_POST,
    newPostText,
  };
};
export const deletePost = (postId) => {
  return {
    type: DELETE_POST,
    postId,
  };
};

export const setUsersProfile = (profile) => {
  return {
    type: SET_USERS_PROFILE,
    profile,
  };
};
export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status,
  };
};

export const getUserProfile = (userId) => async (dispatch) => {
  const response = await profileAPI.getProfile(userId);
  dispatch(setUsersProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
