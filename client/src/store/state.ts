import React from 'react';
import { AuthState, Action } from '../types/state.types';

export const initialState: AuthState = {
    id: NaN,
    email: '',
    isNewUser: false,
    isAuthenticated: false,
}

interface ContextStore {
    state: AuthState;
    dispatch: (args: Action) => any
}

export const AuthContext = React.createContext<ContextStore>({
    state: {} as AuthState,
    dispatch: (args: Action) => {}
});
