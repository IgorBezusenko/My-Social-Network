import {stopSubmit} from "redux-form";
import {authAPI} from "../API/auth-api";
import {securityAPI} from "../API/security-api";
import {ResultCodesEnum, ResultCodesForCaptcha} from "../API/api";
import {BaseThunkType, InferActionsTypes} from "./reduxStore";
import {FormAction} from "redux-form/lib/actions";

const SET_AUTH_USER_DATA = "AUTH/SET_AUTH_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "AUTH/GET_CAPTCHA_URL_SUCCESS";

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
};

export const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            // @ts-ignore
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
};

export const actions = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: SET_AUTH_USER_DATA,
        payload: {userId, email, login, isAuth}
    } as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}} as const)
}

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    const data = await authAPI.me();
    if (data.resultCode === ResultCodesEnum.Success) {
        const {id, email, login} = data.data;
        dispatch(actions.setAuthUserData(id, email, login, true));
    }
};

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === ResultCodesEnum.Success) {
        await dispatch(getAuthUserData());
    } else {
        if (data.resultCode === ResultCodesForCaptcha.CaptchaIsRequired) {
            await dispatch(getCaptchaUrl());
        }
        let message =
            data.messages.length > 0
                ? data.messages[0]
                : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
    }
};

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
};

export const logout = (): ThunkType => async (dispatch) => {
    const data = await authAPI.logout();
    if (data.resultCode === 0) {
        dispatch(actions.setAuthUserData(null, null, null, false));
    }
};

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes | FormAction>