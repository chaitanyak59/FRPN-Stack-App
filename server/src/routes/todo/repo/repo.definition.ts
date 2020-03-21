import { PoolClient } from "pg";

interface TodoRepo {
    db: PoolClient;
}

export const todoRepo = {} as TodoRepo;

export function initTodoRepo(db: PoolClient): TodoRepo {
    todoRepo.db = db;
    return todoRepo;
}