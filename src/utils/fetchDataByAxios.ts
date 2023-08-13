import { AxiosRequestConfig } from 'axios';
import instance from '../apis/createAxiosRequestInstance';

import { Method } from '../types/api/RequestMethod';
import { SignData, TodoData } from '../types/api/RequestData';

const fetchDataByAxios = () => {
  const fetchData = async (
    method: Method,
    url: string,
    data?: SignData | TodoData,
    config?: AxiosRequestConfig
  ) => {
    const options = {
      method,
      url,
      data,
      ...config,
    };

    try {
      const response = await instance.request(options);
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return fetchData;
};

export default fetchDataByAxios;

