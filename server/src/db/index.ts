import { FastifyServer, ServerRouterOptions as RouteOptions } from "../global";
import { Pool, PoolConfig, PoolClient } from 'pg';

const getPoolProperties = (connString?: string): Partial<PoolConfig> => ({
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
    connectionString: connString,
    ssl: Boolean(process.env.SSL),
});

//Do not export this unless Required, Already Decorated Via Server
let dbClient: PoolClient;

export const initializeDb: any = async (server: FastifyServer, opts: RouteOptions,
    done: (error?: Error) => void): Promise<void> => {
    try {
        const DB_URL = process.env.DATABASE_URL;
        const config: PoolConfig = getPoolProperties(DB_URL);
        const pool = new Pool(config);
        dbClient = await pool.connect();
        server.decorate('db', dbClient); // Attaching to Global Instance
        done();
    } catch (e) {
        console.error('DB not Initialised');
        done(e);
    }
};

initializeDb[Symbol.for('skip-override')] = true;
