import { todoRepo } from "./repo.definition";
import { TodoItem } from "../../../types/todo-types";

export async function getTodoDataByIdRepo(id: number, userID: number): Promise<TodoItem | null> {
    try {
        const data = await todoRepo.db.query<TodoItem>(`SELECT * from todoapp.todo AS td WHERE id=$1 AND user_id=$2`, [
            id,
            userID
        ]);
        const todoData = data.rows[0];
        return todoData;
    } catch (e) {
        return null;
    }
}

export async function getTodoData(userID: number): Promise<TodoItem[] | null> {
    try {
        const data = await todoRepo.db.query<TodoItem>(`SELECT * from todoapp.todo WHERE user_id=$1 order by created_at desc`, [
            userID
        ]);
        return data.rows;
    } catch (e) {
        return null;
    }
}

export async function createTodoDataRepo(todoItem: TodoItem, userID: number): Promise<number | null> {
    try {
        const data = await todoRepo.db.query<{ id: number }>(`INSERT INTO todoapp.todo(description, name, user_id) VALUES ($1,$2, $3) RETURNING id`, [
            todoItem.description,
            todoItem.name,
            userID
        ]);
        return data.rows[0].id;
    } catch (e) {
        console.error(e.message);
        return null;
    }
}

export async function updateTodoDataRepo<T = {}>(todoItem: TodoItem, userID: number): Promise<number | null> {
    try {
        const data = await todoRepo.db.query<{ id: number }>(`
        UPDATE todoapp.todo SET name=$1,description=$2,user_id=$4 WHERE id=$3 RETURNING id
        `, [
            todoItem.name,
            todoItem.description,
            todoItem.id,
            userID
        ]);
        return data.rows[0].id;
    } catch (e) {
        return null;
    }
}

export async function deleteTodoDataRepo(id: number): Promise<boolean> {
    try {
        const res = await todoRepo.db.query<{id: number}>(`DELETE FROM todoapp.todo AS td WHERE id=$1 RETURNING id`, [id]);
        return res.rows[0] && !!res.rows[0].id;
    } catch (e) {
        console.error(e);
        return false;
    }
} 