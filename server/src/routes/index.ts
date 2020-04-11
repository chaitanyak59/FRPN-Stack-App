import * as path from 'path';
import fstatic from 'fastify-static';
import { FastifyServer } from '../global';
import todoListRoutes from './todo';
import { errorHandler } from '../helpers/api-error.helpers';
import authRoutes from './auth';

function registerHandlers(server: FastifyServer, _: unknown, done: (error?: Error) => void) {
    server.register(todoListRoutes, { prefix: 'posts/' });
    server.register(authRoutes, { prefix: 'auth/' });
    done();
}

function initRestRoutes(server: FastifyServer): void {
    server.register(registerHandlers, { prefix: '/api/'}); // Global Api Register
    server.register(fstatic, {
        root: path.join(process.cwd(), '..', 'client', 'build'),
        maxAge: 86400,
        cacheControl: true
    });
}

export default function initialiseRoutes(server: FastifyServer): void {
    initRestRoutes(server);

    // Error Handler
    server.setNotFoundHandler(errorHandler);
}