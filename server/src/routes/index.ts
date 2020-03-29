import * as path from 'path';
import fstatic from 'fastify-static';
import { FastifyServer } from '../global';
import todoListRoutes from './todo';
import { errorHandler } from '../helpers/api-error.helpers';


function initRestRoutes(server: FastifyServer): void {
    server.register(function (server: FastifyServer, _, done: (error?: Error) => void): void {
        server.register(todoListRoutes, { prefix: '/posts' }); //Routes Go Here...
        done();
    }, { prefix: '/api'}); // Global Api Register

}

function initStaticRoutes(server: FastifyServer): void {
    server.register(fstatic, {
        root: path.join(process.cwd(), '..', 'client', 'build'),
        maxAge: 86400,
        cacheControl: true
    });
}

export default function initialiseRoutes(server: FastifyServer): void {
    initRestRoutes(server);
    initStaticRoutes(server);

    // Error Handler
    server.setNotFoundHandler(errorHandler);
}