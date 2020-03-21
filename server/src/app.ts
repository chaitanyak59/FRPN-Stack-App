import { ListenOptions } from "fastify";
import { FastifyServer } from "./global";

export default async function startApp(server: FastifyServer, config: ListenOptions): Promise<void> {
    try {
        const { port } = config;
        server.listen({ port }, (err, address) => {
            if (err) throw err;
            console.info('Server Started @ ', address);
        });
    } catch (e) {
        console.error(e);
        process.exit(0);
    }
}