import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { clearTokens, getAccessToken, getRefreshToken, setTokens } from '../services/token';
import type { Tokens } from '../types/tokens';
import { refresh } from '../services/auth';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!getAccessToken());

  const login = (tokens: Tokens) => {
    setTokens(tokens.access_token, tokens.refresh_token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    clearTokens();
    setIsAuthenticated(false);
    navigate('/auth/signin');
  };

  const refreshTokens = async () => {
    const refreshToken = getRefreshToken();

    if (!refreshToken) {
      logout();
      return;
    }

    try {
      const tokens = await refresh(refreshToken);
      login(tokens);
    } catch (error) {
      console.error(error);
      logout();
    }
  };

  useEffect(() => {
    const access_token = getAccessToken();
    const refresh_token = getRefreshToken();

    if (!access_token && refresh_token) {
      refreshTokens();
    }
  });

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, refreshTokens }}>
      {children}
    </AuthContext.Provider>
  );
};
