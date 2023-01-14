import { IncomingMessage } from 'http';
import { NextApiRequest } from 'next';
import { SubmitDataProps } from 'types';
import instance from './axios';

export const fetchCSRFToken = async () => {
  const response = await instance.get('sanctum/csrf-cookie');
  return response;
};

export const getQuotes = async () => {
  const response = await instance('api/quotes');
  return response;
};

export const register = async (data: SubmitDataProps) => {
  const response = await instance.post('api/register', data);
  return response;
};

export const login = async (data: SubmitDataProps) => {
  const response = await instance.post('api/login', data);
  return response;
};

export const logout = async () => {
  const response = await instance.get('api/logout');
  return response;
};

export const checkUser = async ({ cookies }: { cookies?: string }) => {
  const response = await instance({
    url: 'api/user',
    headers: {
      Cookie: cookies,
      referer: process.env.NEXT_PUBLIC_FRONT_URL,
    },
  });
  return response;
};

export const getUser = async () => {
  const response = await instance.get('api/user');
  return response;
};

export const sendEmail = async () => {
  const response = await instance('api/email/verify');
  return response;
};
