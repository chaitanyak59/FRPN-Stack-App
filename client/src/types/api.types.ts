export enum REQUEST_STATUS {
    inprogress = 1,
    done,
}

export interface AuthResponse {
    success: boolean;
    payload: any;
}

export interface ApiHook {
    error: Error|undefined;
    data: AuthResponse;
    retry?: boolean;
    status: REQUEST_STATUS;
    requestConfig: any;
}