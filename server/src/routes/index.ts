import * as path from 'path';

import { FastifyServer } from '../global';
import todoListRoutes from './todo';
import { errorHandler } from '../helpers/api-error.helpers';


function initRestRoutes(server: FastifyServer): void {
    server.register(function (server: FastifyServer, _, done: (error?: Error) => void): void {
        server.register(todoListRoutes);
        done();
    }, { prefix: '/api' }); // Global Api Register

}

export default function initialiseRoutes(server: FastifyServer): void {
    initRestRoutes(server);

    // Static Server
    server.register(require('fastify-static'), {
        root: path.join(process.cwd(), '..', 'client', 'build')
    });

    // Error Handler
    server.setNotFoundHandler(errorHandler);
}