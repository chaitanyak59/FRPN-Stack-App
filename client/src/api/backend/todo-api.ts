import { TodoItem } from "../../types/todo.types";
import { AxiosRequestConfig } from "axios";

export const createTodoItemRequest = (data: { name: string, description: string }): AxiosRequestConfig => ({
    data,
    method: 'POST',
    url: '/posts',
    withCredentials: true
});

export const updateTodoListRequest = (data: TodoItem): AxiosRequestConfig => ({
    data,
    method: 'PUT',
    url: '/posts',
    withCredentials: true
});

export const getToDoListRequest = (): AxiosRequestConfig => ({
    method: 'GET',
    url: '/posts',
    withCredentials: true
})

export const deleteTodoItemRequest = (id: number): AxiosRequestConfig => ({
    method: 'DELETE',
    url: `/posts/${id}`,
    withCredentials: true
});
