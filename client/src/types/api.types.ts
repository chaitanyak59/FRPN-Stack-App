export enum REQUEST_STATUS {
    inprogress = 1,
    done,
}

export interface ApiHook {
    error: Error|undefined;
    data: any;
    retry?: boolean;
    status: REQUEST_STATUS;
    requestConfig: any;
}