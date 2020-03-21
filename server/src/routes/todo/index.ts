import { FastifyServer, ServerRouterOptions } from "../../global";
import { initTodoRepo } from "./repo/repo.definition";
import * as handler from "./handler/todo.handler";


export default function todoListRoutes(server: FastifyServer, _: ServerRouterOptions, done: (error?: Error) => void): void {
    initTodoRepo(server.db); // Initialise Repo Layer

    server.get('/posts', handler.getAllTodoData);
    server.delete('/posts/:id', handler.deleteTodoItem);
    server.get('/posts/:id', handler.getTodoById);
    server.post('/posts', handler.createTodoItem);
    server.put('/posts', handler.updateTodoItem);
    done();
}