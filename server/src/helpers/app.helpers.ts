import { Request } from "../global";

const MAGIC_SAUCE = 6;

export function generateRandomSalt() {
    return Math.floor(Math.random() * 5) + MAGIC_SAUCE;
}

export function extractUserId(request: Request): number {
    const user: any = request.user;
    return user && Number(user.id);
}