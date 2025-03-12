import type { AxiosRequestConfig, Method } from 'axios';

import axios from 'axios';

import { auth } from "@canva/user";


const axiosInstance = axios.create({
    baseURL: BACKEND_HOST || 'http://localhost:3000',
    timeout: 2 * 60 * 1000,
});

axiosInstance.interceptors.request.use(
    async config => {
        try {
            const token = await auth.getCanvaUserToken();

            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${token}`,
            } as any;

            return config;
        } catch (error) {
            return Promise.reject(error);
        }
    },
    error => {
        return Promise.reject(error);
    },
);


axiosInstance.interceptors.response.use(
    config => {
        return config;
    },
    error => {
        let errorMessage = 'Error';

        if (error?.message?.includes('Network Error')) {
            errorMessage = 'Network Error';
        } else {
            errorMessage = error?.message;
        }


        return {
            status: error.status,
            message: errorMessage,
            data: error.response,
        };
    },
);

export type Response<T = any> = {
    status: number;
    message: string;
    data: T;
};

export type MyResponse<T = any> = Promise<Response<T>>;

export const request = <T = any>(
    method: Lowercase<Method>,
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
): MyResponse<T> => {
    if (method === 'post') {
        return axiosInstance.post(url, data, config);
    } else {
        return axiosInstance.get(url, {
            params: data,
            ...config,
        });
    }
};
