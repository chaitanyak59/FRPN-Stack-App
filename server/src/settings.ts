import { FastifyServer } from "./global";
import cors from 'fastify-cors';
import {initializeDb} from './db';
import { corsCallback } from "./types/cors-types";

const corsOptions = {
    origin: (origin: string, cb: corsCallback): unknown => {
        //  Request from localhost will pass
        if ( !origin || 
             ['localhost', '.*fastify.*'].some(domain => origin.match(domain))
           ) {
            cb(null, true);
            return;
        }
        cb(new Error("Not Allowed By Cors"), false);
    },
    preflight: true,
    preflightContinue: true,
    maxAge: 86400,
    methods: ['GET', 'PUT', 'POST', 'DELETE']
};

export default function applySettings(server: FastifyServer): void {
    server.register(cors, corsOptions);
    server.register(initializeDb);
}