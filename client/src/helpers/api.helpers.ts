import { REQUEST_STATUS } from "../types/api.types";
import { ApiHook } from "../types/api-hook.types";

export const updateRequestStatus = (config: any): ApiHook => ({
    status: REQUEST_STATUS.inprogress,
    error: undefined,
    data: undefined,
    requestConfig: config
});

export const isLoading = (status: REQUEST_STATUS): boolean => {
    return !status || status === REQUEST_STATUS.inprogress;
}