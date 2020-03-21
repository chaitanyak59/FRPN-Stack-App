import { FastifyServer } from '../global';
import todoListRoutes from './todo';

export default function initialiseRoutes(server: FastifyServer): void {
    server.register(function (server: FastifyServer, _, done: (error?: Error) => void): void {
        server.register(todoListRoutes);
        server.setNotFoundHandler((request, reply) => {
            reply.status(404);
            reply.send(`** Error 404 Occured ** ${request.raw.url} **`);
        });
        done();
    }, { prefix: '/api' });
}