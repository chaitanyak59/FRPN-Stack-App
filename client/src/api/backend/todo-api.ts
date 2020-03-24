import { createRequest } from "../rest-client"
import { SuccessReponse } from "../types/http-types";
import { TodoItem } from "../../types/todo.types";

export const createTodoItemRequest = (data: { name: string, description: string }) => ({
    data,
    method: 'POST',
    url: '/posts'
});

export const updateTodoListRequest = (data: TodoItem) => ({
    data,
    method: 'PUT',
    url: '/posts',
});

export const getToDoListRequest = () => ({
    method: 'GET',
    url: '/posts'
})

export const deleteTodoItemRequest = (id: number) => ({
    method: 'DELETE',
    url: `/posts/${id}`
});

export async function getToDoList() {
    const response: SuccessReponse<TodoItem[]> = await createRequest<SuccessReponse<TodoItem[]>>({
        method: 'GET',
        url: '/posts'
    });
    return response;
}

export async function deleteTodoList(id: number) {
    const response: SuccessReponse<string | number> = await createRequest<SuccessReponse<string | number>>({
        method: 'DELETE',
        url: `/posts/${id}`
    });
    return response;
}

export async function updateTodoList(data: TodoItem) {
    const response: SuccessReponse<TodoItem> = await createRequest<SuccessReponse<TodoItem>>({
        method: 'PUT',
        url: '/posts',
        data
    });
    return response;
}