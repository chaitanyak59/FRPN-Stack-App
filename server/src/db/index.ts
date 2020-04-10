import { FastifyServer, ServerRouterOptions as RouteOptions } from "../global";
import { Pool, PoolConfig } from 'pg';
import { DbType } from "../types/db.types";
import * as env from "../helpers/env.helpers";

const getPoolProperties = (connString: string): Partial<PoolConfig> => ({
    max: env.getDbMaxConnections(),
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
    connectionString: connString,
    ssl: env.getSSLConnection(),
});

//Do not export this unless Required, Already Decorated Via Server
let dbClient: DbType;

export const initializeDb: any = async (server: FastifyServer, opts: RouteOptions,
    done: (error?: Error) => void): Promise<void> => {
    const DB_URL = env.getDbURL();
    const config: PoolConfig = getPoolProperties(DB_URL);
    const pool = new Pool(config);
    dbClient = await pool.connect();
    server.decorate('db', dbClient); // Attaching to Global Instance
    done();
};

//Added for Fastify Plugin Instance/Scope issue
initializeDb[Symbol.for('skip-override')] = true;
