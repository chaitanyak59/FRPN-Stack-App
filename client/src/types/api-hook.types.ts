import { REQUEST_STATUS } from "./api.types";

export interface ApiHook {
    error: Error|undefined;
    data: any;
    isBusy?: boolean;
    retry?: boolean;
    status: REQUEST_STATUS;
    requestConfig: any;
}