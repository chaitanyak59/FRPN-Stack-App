import { FastifyServer, ServerRouterOptions } from "../../global";
import { initAuthRepo } from "./repo/repo.definition";
import * as handler from './handlers/auth.handler';
import { registerUserSchema, validateUserSchema, validatePasswordSchema, changePasswordSchema } from "./validators";

export default function authRoutes(server: FastifyServer, _: ServerRouterOptions, done: (error?: Error) => void): void {
    initAuthRepo(server.db); // Initialise Repo Layer

    server.get('user/:emailID', { schema: validateUserSchema }, handler.validateUser);
    server.put('change-password', { preValidation: server.authenticate, schema: changePasswordSchema }, handler.updatePassword);
    server.post('register/:emailID', { schema: registerUserSchema }, handler.registerUser);
    server.post('authenticate', { schema: validatePasswordSchema }, handler.validatePassword);
    done();
}