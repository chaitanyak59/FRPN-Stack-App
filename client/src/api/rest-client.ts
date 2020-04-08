import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const apiInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
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