import { SubmitDataProps } from 'types';
import instance from './axios';

export const fetchCSRFToken = async () => {
  const response = await instance.get('sanctum/csrf-cookie');
  return response;
};

export const getQuotes = () => {
  return instance({ url: 'api/quotes' });
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

export const sendEmail = async () => {
  const response = await instance({ url: 'api/email/verify' });
  return response;
};
