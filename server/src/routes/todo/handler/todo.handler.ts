import { Request, Response } from "../../../global";
import { getTodoDataByIdRepo, createTodoDataRepo, updateTodoDataRepo, deleteTodoDataRepo, getTodoData } from "../repo/todo.repo";
import { getStatusCode, getResponsePayload } from "../../../helpers/response.helpers";

export async function getTodoById(request: Request, reply: Response) {
    const id = request.params.id;
    const data = await getTodoDataByIdRepo(id);
    reply.code(getStatusCode(data));
    reply.send(getResponsePayload(data));
}

export async function getAllTodoData(request: Request, reply: Response) {
    const data = await getTodoData();
    reply.code(getStatusCode(data));
    reply.send(getResponsePayload(data));
}

export async function createTodoItem(request: Request, reply: Response) {
    const body = request.body;
    const result = await createTodoDataRepo(body);
    reply.code(getStatusCode(result, true));
    reply.send(getResponsePayload(result));
}

export async function updateTodoItem(request: Request, reply: Response) {
    const body = request.body;
    const result = await updateTodoDataRepo(body);
    reply.code(getStatusCode(result));
    reply.send(getResponsePayload(result, "Cannot Update / Details not found!"));
}

export async function deleteTodoItem(request: Request, reply: Response) {
    const id = +request.params.id;
    const result = await deleteTodoDataRepo(id);
    reply.code(getStatusCode(result));
    reply.send(getResponsePayload(result, 'Not Found'));
}