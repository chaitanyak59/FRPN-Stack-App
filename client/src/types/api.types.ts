export enum REQUEST_STATUS {
    inprogress = 1,
    done,
}

export interface ApiResponse {
    success: boolean;
    payload: any;
}

export interface ApiHook {
    error: Error|undefined;
    data: ApiResponse;
    retry?: boolean;
    status: REQUEST_STATUS;
    requestConfig: any;
}