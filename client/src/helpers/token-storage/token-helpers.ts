import { TokenState } from "../../types/auth.types";

export const tokenStorage: TokenState = {
    token: '',
    set(token: string) {
        this.token = token;
    },
    get() {
        return this.token;
    },
    clear() {
        this.token = '';
    }
}