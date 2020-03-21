import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const server_url = process.env.SERVER_URL || 'http://localhost:5000/api';

export const apiInstance = axios.create({
    baseURL: server_url,
    timeout: 4000
});

apiInstance.defaults.headers.post['Content-Type'] = 'application/json';

export const fetchData = async <T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>| any> => {
   try {
       const resposne = await apiInstance(config);
       return resposne && resposne.data;
   } catch(e) {
       throw new Error('Request processing Failed:' + {
           request: config.method,
           url: config.url
       });
   }
}