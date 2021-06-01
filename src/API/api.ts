import axios from "axios";
import {UsersType} from "../redux/usersReducer";

export const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "b8c04e43-1d5b-48ed-bbd5-829734d4889b",
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
});


// type itemUserType = {
//     name: string,
//     id: number,
//     photos: PhotosType,
//     status: string | null,
//     followed: boolean
// }
export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}

export enum ResultCodesForCaptcha {
    CaptchaIsRequired = 10
}

export type ApiResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D,
    messages: Array<string>,
    resultCode: RC,
}
export type GetItemsType = {
    items: Array<UsersType>,
    totalCount: number,
    error: string | null
}