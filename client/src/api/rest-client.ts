import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { getApiUrl } from '../helpers/env.helpers';

export const apiInstance = axios.create({
    baseURL: getApiUrl(),
    timeout: 4000
});

apiInstance.defaults.headers.post['Content-Type'] = 'application/json';

export const createRequest = async <T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
   try {
       const response = await apiInstance(config);
       return response && response.data;
   } catch(e) {
       throw new Error(e.toJSON());
   }
}