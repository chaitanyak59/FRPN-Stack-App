import { PAuthUser } from "../../types/auth.types";
import { AxiosRequestConfig } from "axios";

//New User
export const registerUser = (emailID: string): AxiosRequestConfig => ({
    method: 'POST',
    url: `/register/${emailID}`
});

//Validate Email ID
export const checkUser = (emailID: string): AxiosRequestConfig => ({
    method: 'GET',
    url: `/user/${emailID}`,
});

//Validate Credentials
export const authenticateUser = (data: PAuthUser): AxiosRequestConfig => ({
    data,
    method: 'POST',
    url: '/authenticate'
})

//Change Password
export const changePassword = (data: PAuthUser): AxiosRequestConfig => ({
    data,
    method: 'PUT',
    url: '/change-password',
    withCredentials: true,
})
