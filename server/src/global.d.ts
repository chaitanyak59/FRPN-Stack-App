import * as fastify from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';

declare interface FastifyServer extends fastify.FastifyInstance<Server, IncomingMessage, ServerResponse> {
    db?: any;
    authenticate?: any;
}

declare type Request = fastify.FastifyRequest<IncomingMessage, fastify.DefaultQuery, fastify.DefaultParams, fastify.DefaultHeaders, any>;

declare type Response = fastify.FastifyReply<ServerResponse>;

declare interface ServerRouterOptions extends fastify.RouteShorthandOptions {
    url?: string;
    prefix?: string;
}

type JSONSchema = Record<string, any>;

export interface ValidationSchema {
    body?: JSONSchema;
    querystring?: JSONSchema;
    params?: JSONSchema;
    headers?: JSONSchema;
    response?: {
        [code: number]: JSONSchema;
        [code: string]: JSONSchema;
    };
}
