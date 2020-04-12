import { Action, AuthState } from "../types/state.types";
import { initialState } from "./state";

export const reducer = (state: AuthState, action: Action): AuthState => {
    switch (action.type) {
        case 'AuthenticateUser':
            return {
                ...state,
                ...action.payload
            }
        case 'LoginSuccess':
            return {
                ...state,
                ...action.payload
            }
        case 'ValidateEmail':
            return {
                ...state,
                ...action.payload
        }
        case 'LogoutUser':
            return initialState
        default:
            return state;
    }
}