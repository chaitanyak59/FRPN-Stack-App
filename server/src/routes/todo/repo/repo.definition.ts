import { DbType } from "../../../types/db.types";

interface TodoRepo {
    db: DbType;
}

export const todoRepo = {} as TodoRepo;

export function initTodoRepo(db: DbType): TodoRepo {
    todoRepo.db = db;
    return todoRepo;
}