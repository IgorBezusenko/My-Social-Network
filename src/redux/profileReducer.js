import { usersAPI } from "../API/api";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";

const initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 52 },
    { id: 2, message: "Its my first post.", likesCount: 25 },
    { id: 3, message: "Hi, man", likesCount: 45 },
    { id: 4, message: "The post.", likesCount: 21 },
  ],
  newPostText: "New text",
  profile: null,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newpost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        newPostText: "",
        posts: [...state.posts, newpost],
      };
    }

    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText };
    }

    case SET_USERS_PROFILE: {
      return { ...state, profile: action.profile };
    }

    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export const setUsersProfile = (profile) => {
  return {
    type: SET_USERS_PROFILE,
    profile,
  };
};

export const fetchUserId = (userId) => {
  return (dispatch) => {
    usersAPI.getUserId(userId).then((response) => {
      dispatch(setUsersProfile(response.data));
    });
  };
};
