import { authAPI } from "../API/api";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login) => {
  return {
    type: SET_AUTH_USER_DATA,
    data: { userId, email, login },
  };
};

export const getAuthUserData = () => {
  return (dispatch) => {
    authAPI.authMe().then((response) => {
      const { id, email, login } = response.data.data;
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(id, email, login));
      }
    });
  };
};
