import { ListenOptions } from "fastify";
import { FastifyServer } from "./global";

export default async function startApp(server: FastifyServer, config: ListenOptions): Promise<void> {
    try {
        const { port, host } = config;
        await server.listen({ port, host });
        console.log('Server Started @ ', `${config.host}:${config.port}`);
    } catch (e) {
        console.error(e);
        process.exit(0);
    }
}