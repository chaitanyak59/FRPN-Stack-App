import { AuthState } from "../types/state.types";
import { tokenStorage } from "../helpers/token-storage/token-helpers";

interface CacheProps {
    token: string;
    state: AuthState;
}

const TODO_APP_KEY = 'todo_app'

export const unloadState = (state: AuthState) => {
    const token = tokenStorage.get();
    localStorage.setItem(TODO_APP_KEY, JSON.stringify({
        token,
        state
    }))
}

export const loadState = (storeState: AuthState) => {
    try {
        const storagePayload = localStorage.getItem(TODO_APP_KEY);
        const cache: CacheProps = storagePayload && JSON.parse(storagePayload);
        if(!cache) {
            return storeState
        }
        tokenStorage.set(cache.token);
        return cache.state
    } catch(e) {
        console.warn('Reading from Cache Failed');
        return storeState;
    }
}