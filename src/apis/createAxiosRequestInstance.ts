import axios, { Axios, AxiosRequestConfig } from 'axios';
import hasToken from '../utils/hasToken';
import { API_BASE_URL } from '../constants/apiBaseUrl';

const axiosConfig: AxiosRequestConfig = {
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

const instance: Axios = axios.create(axiosConfig);

instance.interceptors.request.use(
  (config) => {
    const { isToken, token } = hasToken();
    if (isToken) {
      config.headers['Authorization'] = `bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
