import { Request, Response, FastifyServer } from "../../../global";
import jwt from 'fastify-jwt';

import { getAuthSecret } from "../../../helpers/env.helpers";
import { RouteOptions } from 'fastify';

export const initializeAuthPlugin: any = async (server: FastifyServer, opts: RouteOptions,
    done: (error?: Error) => void): Promise<void> => {
    server.register(jwt, { secret: getAuthSecret() });
    server.decorate("authenticate", async function (request: Request, reply: Response) {
        try {
            await request.jwtVerify();
        } catch (err) {
            reply.send(err);
        }
    });
    done();
};

//Added for Fastify Plugin Instance/Scope issue
initializeAuthPlugin[Symbol.for('skip-override')] = true;
