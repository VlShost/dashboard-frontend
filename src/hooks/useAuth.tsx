import { useCallback } from 'react';

export const useAuth = () => {
  const login = useCallback((access_token: string, refresh_token: string) => {
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('refresh_token', refresh_token);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }, []);

  const isAuthenticated = () => {
    return localStorage.getItem('access_token') !== null;
  };

  return { login, logout, isAuthenticated };
};
