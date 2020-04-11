import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { getApiUrl } from '../helpers/env.helpers';
import { tokenStorage } from '../helpers/token-storage/token-helpers';

export const apiInstance = axios.create({
    baseURL: getApiUrl(),
    timeout: 4000
});

apiInstance.defaults.headers.post['Content-Type'] = 'application/json';
apiInstance.interceptors.request.use(function (config) {
    if(config.withCredentials) {
        const token = tokenStorage.get();
        config.headers.Authorization =  `Bearer ${token}`;
    }
    return config;
});

export const createRequest = async <T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
   try {
       const response = await apiInstance(config);
       return response && response.data;
   } catch(e) {
       throw new Error(e.toJSON());
   }
}