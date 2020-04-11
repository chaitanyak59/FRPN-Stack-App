import { NamedItem } from "./common-types";

interface AuthUser extends NamedItem {
    email: string;
    is_active: boolean;
    password: string;
}

export type PAuthUser = Partial<AuthUser>;