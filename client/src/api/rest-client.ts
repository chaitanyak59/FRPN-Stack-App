import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const server_url: string = process.env.SERVER_URL || 'http://localhost:5000/api';

export const apiInstance = axios.create({
    baseURL: server_url,
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