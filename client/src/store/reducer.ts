import { Action, AuthState } from "../types/state.types";

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
        default:
            return state;
    }
}