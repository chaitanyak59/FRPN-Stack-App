import codes from 'http-status-codes';

interface ResponseMessage<T> {
    success: boolean;
    payload: T | boolean;
}

export function getStatusCode<T>(data: T, isCreate = false, ovverideCode?: number) {
    if (data) {
        return isCreate ? codes.CREATED : codes.OK;
    } else {
        return ovverideCode ? ovverideCode : codes.NOT_FOUND;
    }
}

type Payload<T> = T | boolean;

export function getResponsePayload<T, U = {}>(data: T, overrideMsg?: Payload<U>): ResponseMessage<T|U> {
    if (data) {
        return { success: true, payload: data };
    } else {
        return { success: false, payload: overrideMsg || data };
    }
}
