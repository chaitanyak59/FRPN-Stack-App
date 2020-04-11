import { Response } from "../../../global";

export async function createToken(instance: Response, details: object | string | null) {
    if (!details) {
        return null;
    }
    const signPayload = await instance.jwtSign(details, {
        expiresIn: '2h'
    });
    return signPayload;
}
