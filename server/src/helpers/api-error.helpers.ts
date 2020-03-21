import { Request, Response } from "../global";

export const errorHandler = (request: Request, reply: Response) => {
    reply.status(404);
    reply.send(`** Error 404 Occured ** ${request.raw.url} **`);
};
