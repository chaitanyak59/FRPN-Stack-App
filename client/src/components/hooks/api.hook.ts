import { useState, useEffect, useCallback } from "react"
import { REQUEST_STATUS } from "../../types/api.types";
import { createRequest } from "../../api/rest-client";
import { ApiHook } from "../../types/api-hook.types";
import { updateRequestStatus } from "../../helpers/api.helpers";

let initialRequestConfig = {} as ApiHook;

export const useApiEffect = (): [ApiHook, (config: any) => void] => {
    const [fetchApi, setFetchApi] = useState(initialRequestConfig);

    const setApiDetails = useCallback((config) =>  setFetchApi(updateRequestStatus(config)), [])
    useEffect(() => {
        if (fetchApi.requestConfig) {
            let data: any, error: Error;
            const callApi = async () => {
                try {
                    data = await createRequest(fetchApi.requestConfig)
                } catch (e) {
                    error = e;
                } finally {
                    setFetchApi((prevState) => ({
                        ...prevState,
                        isBusy: false,
                        status: REQUEST_STATUS.done,
                        data,
                        error
                    }))
                }
            }
            callApi(); // Making Request
        }
    }, [fetchApi.requestConfig])
    return [fetchApi, setApiDetails]
}