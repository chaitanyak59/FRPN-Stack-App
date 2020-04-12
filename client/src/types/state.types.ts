export interface AuthState {
    id: number;
    email: string;
    isNewUser: boolean;
    isAuthenticated: boolean;
}

export type AuthAction = 'ValidateEmail' | 'AuthenticateUser' | 'Logout' | 'LoginSuccess'

interface BaseAction {
    type: AuthAction
}

export interface Action extends BaseAction {
    payload?: any
}