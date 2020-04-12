import { Response } from "../../../global";

export async function createToken(instance: Response, details: object | string | null, expiresIn: number|string = '2h') {
    if (!details) {
        return null;
    }
    const signPayload = await instance.jwtSign(details, {
        expiresIn
    });
    return signPayload;
}
