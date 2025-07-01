import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.BASE_URL,
});

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error.response?.status;

    if (status === 401) {
      console.log(status);
    }
    return Promise.reject(error);
  }
);
