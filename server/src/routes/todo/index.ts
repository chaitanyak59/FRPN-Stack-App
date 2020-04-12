import { FastifyServer, ServerRouterOptions } from "../../global";
import { initTodoRepo } from "./repo/repo.definition";
import * as handler from "./handler/todo.handler";
import {
    deleteTodoSchema,
    getTodoByIdSchema,
    createTodoSchema,
    updateTodoItemSchema
} from "./validators";


export default function todoListRoutes(server: FastifyServer, _: ServerRouterOptions, done: (error?: Error) => void): void {
    initTodoRepo(server.db); // Initialise Repo Layer
    server.addHook('preValidation', server.authenticate);
    server.get('/', handler.getAllTodoData);
    server.get('/:id', { schema: getTodoByIdSchema }, handler.getTodoById);
    server.post('/', { schema: createTodoSchema }, handler.createTodoItem);
    server.put('/', { schema: updateTodoItemSchema }, handler.updateTodoItem);
    server.delete('/:id', { schema: deleteTodoSchema }, handler.deleteTodoItem);
    done();
}