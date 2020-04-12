import { PAuthUser } from "../../types/auth.types";
import { AxiosRequestConfig } from "axios";

const prefixAuth = (path: string) => `auth/${path}`
//New User
export const registerUser = (emailID: string): AxiosRequestConfig => ({
    method: 'POST',
    url: prefixAuth(`register/${emailID}`)
});

//Validate Email ID
export const checkUser = (emailID: string): AxiosRequestConfig => ({
    method: 'GET',
    url: prefixAuth(`user/${emailID}`)
});

//Validate Credentials
export const authenticateUser = (data: PAuthUser): AxiosRequestConfig => ({
    data,
    method: 'POST',
    url: prefixAuth('authenticate')
})

//Change Password
export const changePassword = (data: PAuthUser): AxiosRequestConfig => ({
    data,
    method: 'PUT',
    url: prefixAuth('change-password'),
    withCredentials: true,
})
