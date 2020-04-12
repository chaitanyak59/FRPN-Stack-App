import { FastifyServer } from "./global";
import cors from 'fastify-cors';

import {initializeDb} from './db';
import { corsCallback } from "./types/cors-types";
import { initializeAuthPlugin } from "./routes/auth/middleware/auth.plugin";

const whitelist = ['localhost', '.*fastify.*'];
const corsOptions = {
    origin: (origin: string, cb: corsCallback): unknown => {
        if ( !origin || whitelist.some(domain => origin.match(domain))) {
            //  Request from localhost will pass
            cb(null, true);
            return;
        }
        cb(new Error("Not Allowed By Cors"), false);
    },
    preflight: true,
    preflightContinue: true,
    credentials: true,
    maxAge: 86400,
    methods: ['GET', 'PUT', 'POST', 'DELETE']
};

export default function applySettings(server: FastifyServer): void {
    server.register(cors, corsOptions);
    server.register(initializeDb);
    server.register(initializeAuthPlugin);
}