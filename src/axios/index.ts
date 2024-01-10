import axios, {AxiosError, AxiosRequestConfig} from 'axios';

export const setAxiosInterceptor = () => {
  const headers = {
    'content-type': 'application/json',
    // authorization: `Bearer ${token}`,
  };
  // Add a request interceptor
  axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      config.headers = {
        ...headers,
        ...config.headers,
      };
      console.log('Request Headers:', config.headers);

      // Do something before request is sent
      return config;
    },
    function (error: AxiosError) {
      console.log('error in axios request', error);

      // Do something with request error
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  axios.interceptors.response.use(
    function (response: any) {
      // console.log('rrrrrr', response);

      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    async function (error: AxiosError) {
      console.log('error in axios response====>', error?.response?.status);

      // Do something with response error
      return Promise.reject(error);
    },
  );
};
