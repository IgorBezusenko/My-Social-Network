import axios from "axios";
import {ProfileType, ResultCodesEnum, ResultCodesForCaptcha} from "../types/types";

const instance = axios.create({
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
type GetUserResponseType = {
    items: Array<any>,
    totalCount: number,
    error: string | null
}
type FollowUnfollowResponseType ={
    resultCode:ResultCodesEnum,
    messages: Array<string>,
    data: object
}
export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance
            .get<GetUserResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => response.data);
    },

    follow(userId: number) {
        return instance.post<FollowUnfollowResponseType>(`follow/${userId}`);
    },
    unfollow(userId: number) {
        return instance.delete<FollowUnfollowResponseType>(`follow/${userId}`);
    },
};



type UpdateStatusResponseType={
    resultCode:ResultCodesEnum,
    messages: Array<string>,
    data: object
}
export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`);
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`);
    },

    updateStatus(status: string) {
        return instance.put<UpdateStatusResponseType>(`profile/status/`, {status: status});
    },

    savePhoto(filePhoto: any) {
        const formData = new FormData();
        formData.append("image", filePhoto);
        return instance.put(`/profile/photo/`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    },
    saveProfile(profile: ProfileType) {
        return instance.put(`profile`, profile);
    },
};



type MeResponseType = {
    data: {
        id: number,
        email: string,
        login: string
    },
    resultCode: ResultCodesEnum,
    messages: Array<string>
}
type LoginResponseType = {
    data: { userId: number, },
    resultCode: ResultCodesEnum | ResultCodesForCaptcha,
    messages: Array<string>
}
export const authAPI = {
    me() {
        return instance.get<MeResponseType>(`auth/me`).then(res => res.data);
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: null | string = null) {
        return instance.post<LoginResponseType>(`auth/login`, {
            email,
            password,
            rememberMe,
            captcha,
        }).then(res => res.data);
    },
    logout() {
        return instance.delete(`auth/login`).then(res => res.data);
    },
};

type GetCaptchaUrlResponseType = {
    url: string
}
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<GetCaptchaUrlResponseType>(`security/get-captcha-url`).then(res => res.data);
    },
};
