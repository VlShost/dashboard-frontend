import axios from 'axios';
import { clearTokens, getAccessToken, getRefreshToken, setTokens } from '../services/token';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

instance.interceptors.request.use((config) => {
  const token = getAccessToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const prevRequest = error?.config;

    if (error?.response?.status === 401 && !prevRequest?.sent) {
      prevRequest.sent = true;

      try {
        const refreshToken = getRefreshToken();

        if (!refreshToken) {
          throw new Error('No refresh token');
        }

        const response = await instance.post('/auth/refresh', null, {
          headers: { Authorization: `Bearer ${refreshToken}` },
        });

        const { access_token, refresh_token: newRefreshToken } = response.data;

        setTokens(access_token, newRefreshToken);

        prevRequest.headers.Authorization = `Bearer ${access_token}`;

        return instance(prevRequest);
      } catch (error) {
        clearTokens();
        window.location.href = '/auth/signin';
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
