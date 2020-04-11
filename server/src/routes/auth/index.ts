import { FastifyServer, ServerRouterOptions } from "../../global";
import { initAuthRepo } from "./repo/repo.definition";
import * as handler from './handlers/auth.handler';
import { registerUserSchema, validateUserSchema, validatePasswordSchema, changePasswordSchema } from "./validators";

export default function authRoutes(server: FastifyServer, _: ServerRouterOptions, done: (error?: Error) => void): void {
    initAuthRepo(server.db); // Initialise Repo Layer

    server.post('register/:emailID', { schema: registerUserSchema }, handler.registerUser);
    server.get('user/:emailID', { schema: validateUserSchema }, handler.validateUser);
    server.post('validate', { schema: validatePasswordSchema }, handler.validatePassword);
    server.post('change-password', { schema: changePasswordSchema }, handler.validatePassword);
    done();
}