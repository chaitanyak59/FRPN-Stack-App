import { DbType } from "../../../types/db.types";

interface AuthRepo {
    db: DbType;
}

export const authRepo = {} as AuthRepo;

export function initAuthRepo(db: DbType): AuthRepo {
    authRepo.db = db;
    return authRepo;
}