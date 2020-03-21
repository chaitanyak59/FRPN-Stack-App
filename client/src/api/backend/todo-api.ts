import { fetchData } from "../rest-client"
import { SuccessReponse } from "../types/http-types";
import { TodoItem } from "../../types/todo.types";

export async function createTodoItem<T>(data: T) {
    const response: SuccessReponse<number> = await fetchData<SuccessReponse<number>>({
        data,
        method: 'POST',
        url: '/posts'
    });
    return response;
}

export async function getToDoList() {
    const response: SuccessReponse<TodoItem[]> = await fetchData<SuccessReponse<TodoItem[]>>({
        method: 'GET',
        url: '/posts'
    });
    return response;
}

export async function deleteTodoList(id: number) {
    const response: SuccessReponse<string|number> = await fetchData<SuccessReponse<string|number>>({
        method: 'DELETE',
        url: `/posts/${id}`
    });
    return response;
}

export async function updateTodoList(data: TodoItem) {
    const response: SuccessReponse<TodoItem> = await fetchData<SuccessReponse<TodoItem>>({
        method: 'PUT',
        url: '/posts',
        data
    });
    return response;
}