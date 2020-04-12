import { Request, Response } from "../global";

export const e404Handler = (request: Request, reply: Response) => {
    if(!request.req.url?.includes('api')) {
        reply.sendFile('index.html'); //This takes path of static Served
        return;
    }
    reply.status(404);
    reply.send(`** Error 404 Occured ** ${request.raw.url} **`);
};
