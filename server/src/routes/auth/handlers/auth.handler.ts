import { Request, Response } from "../../../global";
import codes from 'http-status-codes';

import * as authRepo from '../repo/auth.repo';
import { getStatusCode, getResponsePayload } from "../../../helpers/response.helpers";
import { PAuthUser } from "../../../types/user-types";

// Register User
export async function registerUser(request: Request, reply: Response) {
    const emailID: string = request.params.emailID;
    const data = await authRepo.registerUser(emailID);
    reply.code(getStatusCode(data, true));
    reply.send(getResponsePayload(data, 'Error/ Already Registered!'));
}

// Validate User
export async function validateUser(request: Request, reply: Response) {
    const emailID: string = request.params.emailID;
    const data = await authRepo.validateUser(emailID);
    reply.code(getStatusCode(data));
    reply.send(getResponsePayload(data, 'Error / User Not Found'));
}

// Send Auth Token
export async function validatePassword(request: Request, reply: Response) {
    const userDetails: PAuthUser = request.body;
    const data = await authRepo.validatePassword(userDetails);
    reply.code(getStatusCode(data, false, codes.BAD_REQUEST));
    reply.send(getResponsePayload(data, 'Error / Invalid Password Entered'));
}

// Update Passcode
export async function updatePassword(request: Request, reply: Response) {
    const userDetails: PAuthUser = request.body;
    const data = await authRepo.updatePassword(userDetails);
    reply.code(getStatusCode(data, false));
    reply.send(getResponsePayload(data, 'Error / Cannot be updated'));
}
