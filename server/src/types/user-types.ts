import { NamedItem } from "./common-types";

interface AuthUser extends NamedItem {
    email: string;
    isActive: boolean;
    password: string;
}

export type PAuthUser = Partial<AuthUser>;