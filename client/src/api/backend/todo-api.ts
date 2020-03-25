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
