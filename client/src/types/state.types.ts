export interface AuthState {
    id: number;
    email: string;
    isNewUser: boolean;
    isAuthenticated: boolean;
}

export type AuthAction = 'ValidateEmail' | 'AuthenticateUser' | 'LoginSuccess' | 'LogoutUser';

interface BaseAction {
    type: AuthAction
}

export interface Action extends BaseAction {
    payload?: any
}