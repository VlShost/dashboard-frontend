import instance from '../api/axios';
import type { Tokens } from '../types/tokens';

interface SignInPayload {
  email: string;
  password: string;
}

interface SignUpPayload {
  name: string;
  email: string;
  password: string;
}

export const signIn = async (payload: SignInPayload): Promise<Tokens> => {
  const response = await instance.post('/auth/signin', payload);

  return response.data;
};

export const signUp = async (payload: SignUpPayload): Promise<Tokens> => {
  const response = await instance.post('/auth/signup', payload);

  return response.data;
};

export const refresh = async (refreshToken: string): Promise<Tokens> => {
  const response = await instance.post('/auth/refresh', null, {
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });

  return response.data;
};

export const logout = async (access_token: string): Promise<void> => {
  await instance.post('/auth/logout', null, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
