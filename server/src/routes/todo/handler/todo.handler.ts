import { Request, Response } from "../../../global";
import * as repo from "../repo/todo.repo";
import { getStatusCode, getResponsePayload } from "../../../helpers/response.helpers";
import { extractUserId } from "../../../helpers/app.helpers";

export async function getTodoById(request: Request, reply: Response) {
    const id = request.params.id;
    const userID = extractUserId(request);
    const data = await repo.getTodoDataByIdRepo(id, userID);
    reply.code(getStatusCode(data));
    reply.send(getResponsePayload(data));
}

export async function getAllTodoData(request: Request, reply: Response) {
    const userID = extractUserId(request);
    const data = await repo.getTodoData(userID);
    reply.code(getStatusCode(data));
    reply.send(getResponsePayload(data));
}

export async function createTodoItem(request: Request, reply: Response) {
    const body = request.body;
    const userID = extractUserId(request);
    const result = await repo.createTodoDataRepo(body, userID);
    reply.code(getStatusCode(result, true));
    reply.send(getResponsePayload(result));
}

export async function updateTodoItem(request: Request, reply: Response) {
    const body = request.body;
    const userID = extractUserId(request);
    const result = await repo.updateTodoDataRepo(body, userID);
    reply.code(getStatusCode(result));
    reply.send(getResponsePayload(result, "Cannot Update / Details not found!"));
}

export async function deleteTodoItem(request: Request, reply: Response) {
    const id = +request.params.id;
    const result = await repo.deleteTodoDataRepo(id);
    reply.code(getStatusCode(result));
    reply.send(getResponsePayload(result, 'Not Found'));
}