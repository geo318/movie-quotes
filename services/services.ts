import { axiosInstance } from 'services';
import { SubmitDataProps } from 'types';

export const fetchCSRFToken = async () => {
  const response = await axiosInstance.get('sanctum/csrf-cookie');
  return response;
};

export const getQuotes = async () => {
  const response = await axiosInstance('api/quotes');
  return response;
};

export const register = async (data: SubmitDataProps) => {
  const response = await axiosInstance.post('api/register', data);
  return response;
};

export const login = async (data: SubmitDataProps) => {
  const response = await axiosInstance.post('api/login', data);
  return response;
};

export const logout = async () => {
  const response = await axiosInstance.get('api/logout');
  return response;
};

export const checkUser = async ({ cookies }: { cookies?: string }) => {
  const response = await axiosInstance({
    url: 'api/user',
    headers: {
      Cookie: cookies,
      referer: process.env.NEXT_PUBLIC_FRONT_URL,
    },
  });
  return response;
};

export const getUser = async () => {
  const response = await axiosInstance.get('api/user');
  return response;
};

export const sendEmail = async () => {
  const response = await axiosInstance.get('api/email/verify');
  return response;
};

export const checkEmail = async (data: SubmitDataProps) => {
  const response = await axiosInstance.post(
    'http://localhost:8000/api/forgot-password',
    data
  );
  return response;
};

export const confirmEmail = async (data: SubmitDataProps) => {
  const response = await axiosInstance.post('api/reset-password', data);
  return response;
};

export const changeLang = async (lang: string) => {
  const response = await axiosInstance.get(`api/lang/${lang}`);
  return response;
};
