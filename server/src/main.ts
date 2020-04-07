import fastify from 'fastify';
import dotenv from 'dotenv';

import startApp from './app';
import applySettings from './settings';
import initialiseRoutes from './routes';
import { FastifyServer } from './global';

let server: FastifyServer;

function iniliaseEnv(): void {
  const result = dotenv.config();
  if (result.error) {
    throw new Error('Failed to Load Environment');
  }
}

async function startServer(): Promise<void> {
  iniliaseEnv();
  const port = Number(process.env.PORT);
  const host = process.env.HOST;

  server = fastify();
  applySettings(server); // Can include Configuration,DB-plugin
  initialiseRoutes(server);
  await startApp(server, { port, host });
}

startServer();

//Added For tests
export const getServerMocks = () => ({
  server
});

