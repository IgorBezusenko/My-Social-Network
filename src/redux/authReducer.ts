import {authAPI,  securityAPI} from "../API/api";

import {stopSubmit} from "redux-form";
import {ResultCodesEnum, ResultCodesForCaptcha} from "../types/types";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS";

export type InitialStateType = {
    userId: number | null;
    email: string | null;
    login: string | null;
    isAuth: boolean;
    captchaUrl: string | null;
};

const initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
};

export const authReducer = (
    state = initialState,
    action: any
): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
};
type SetAuthUserDataActionPayloadType = {
    userId: number | null;
    email: string | null;
    login: string | null;
    isAuth: boolean;
};
type SetAuthUserDataActionType = {
    type: typeof SET_AUTH_USER_DATA;
    payload: SetAuthUserDataActionPayloadType;
};

export const setAuthUserData = (
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
): SetAuthUserDataActionType => {
    return {
        type: SET_AUTH_USER_DATA,
        payload: {userId, email, login, isAuth},
    };
};

type GetCaptchaUrlSuccessActionType = {
    type: typeof SET_AUTH_USER_DATA;
    payload: { captchaUrl: string };
};
export const getCaptchaUrlSuccess = (
    captchaUrl: string
): GetCaptchaUrlSuccessActionType => {
    return {
        type: SET_AUTH_USER_DATA,
        payload: {captchaUrl},
    };
};

export const getAuthUserData = () => async (dispatch: any) => {
    const data = await authAPI.me();
    if (data.resultCode === ResultCodesEnum.Success) {
        const {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};

export const login = (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
) => async (dispatch: any) => {
    const data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(getAuthUserData());
    } else {
        if (data.resultCode === ResultCodesForCaptcha.CaptchaIsRequired) {
            dispatch(getCaptchaUrl());
        }
        let message =
            data.messages.length > 0
                ? data.messages[0]
                : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
    }
};

export const getCaptchaUrl = () => async (dispatch: any) => {
    const data = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const logout = () => async (dispatch: any) => {
    const data = await authAPI.logout();
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};
