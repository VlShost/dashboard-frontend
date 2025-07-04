import { createContext } from 'react';

import type { Tokens } from '../types/tokens';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (tokens: Tokens) => void;
  logout: () => void;
  refreshTokens: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
