import { ListenOptions } from "fastify";
import { FastifyServer } from "./global";

export default async function startApp(server: FastifyServer, config: ListenOptions): Promise<void> {
    try {
        const { port } = config;
        server.listen({ port }, (err) => {
            if (err) throw err;
        });
    } catch (e) {
        console.error(e);
        process.exit(0);
    }
}