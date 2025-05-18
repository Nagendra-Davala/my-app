import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.example.com",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

const get = (url: string) => instance.get(url);

const post = (url: string, data: any) => instance.post(url, data);
const put = (url: string, data: any) => instance.put(url, data);
const del = (url: string) => instance.delete(url);

export default {
  get,
  post,
  put,
  delete: del,
};
