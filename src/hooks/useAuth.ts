import { useState } from 'react';
import { getAccessToken, getRefreshToken } from '../services/token';

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isRefreshable, setIsRefreshable] = useState<boolean>(false);

  if (getAccessToken()) {
    console.log(isLoggedIn);
    setIsLoggedIn(true);
    console.log(isLoggedIn);
  } else {
    console.log(isLoggedIn);
    return setIsLoggedIn(false);
  }

  if (getRefreshToken()) {
    console.log(isRefreshable);
    setIsRefreshable(true);
    console.log(isRefreshable);
  } else {
    console.log(isRefreshable);
    return setIsRefreshable(false);
  }

  return { isLoggedIn, isRefreshable };
};

// const access_token = getAccessToken();
// const refresh_token = getRefreshToken();

// const isLoggedIn = Boolean(access_token);
// const isRefreshable = Boolean(refresh_token);

// return { isLoggedIn, isRefreshable };

// const refreshToken = useCallback(async () => {
//   const refresh = getRefreshToken();

//   if (!refresh) {
//     throw new Error('No refresh token');
//   }

//   try {
//     const response = await axios.post('/auth/refresh', null, {
//       headers: { Authorization: `Bearer ${refresh}` },
//     });

//     const { access_token, refresh_token } = response.data;

//     login(access_token, refresh_token);

//     return access_token;
//   } catch (error) {
//     console.log(error);
//     logout();
//     throw error;
//   }
// }, [login, logout]);

// useEffect(() => {
//   const accessToken = getAccessToken();
//   if (accessToken) {
//     setIsAuthenticated(true);
//   }
// }, []);

// useEffect(() => {
//   const access_token = getAccessToken();
//   const refresh_token = getRefreshToken();

//   if (!access_token && !refresh_token) {
//     console.log('[Auth] Попытка рефреша при старте');
//     refreshToken().catch(() => {
//       console.log('[Auth] Рефреш при старте не удался');
//     });
//   }
// }, [refreshToken]);
