import * as fastify from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';

declare interface FastifyServer extends fastify.FastifyInstance<Server, IncomingMessage, ServerResponse> {
    db?: any;
}

declare type Request  = fastify.FastifyRequest<IncomingMessage, fastify.DefaultQuery, fastify.DefaultParams, fastify.DefaultHeaders, any>;

declare type Response = fastify.FastifyReply<ServerResponse>;

declare interface ServerRouterOptions extends fastify.RouteShorthandOptions {
    url: string;
}