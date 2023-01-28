import { axiosInstance } from 'services';
import {
  EmailProps,
  LoginProps,
  RegisterProps,
  ResetPasswordProps,
  AddCommentProps,
} from 'types';

export const fetchCSRFToken = async () => {
  const response = await axiosInstance.get('sanctum/csrf-cookie');
  return response;
};

export const getQuotes = async ({ page = 1 }: { page?: number }) => {
  const response = await axiosInstance(`api/quotes?page=${page}`);
  return response;
};

export const register = async (data: RegisterProps) => {
  const response = await axiosInstance.post('api/register', data);
  return response;
};

export const login = async (data: LoginProps) => {
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

export const checkEmail = async (data: EmailProps) => {
  const response = await axiosInstance.post('api/forgot-password', data);
  return response;
};

export const confirmEmail = async (data: ResetPasswordProps) => {
  const response = await axiosInstance.post('api/reset-password', data);
  return response;
};

export const gmailAuth = async () => {
  const response = await axiosInstance.get('api/auth/redirect');
  return response;
};

export const addComment = async (data: AddCommentProps) => {
  const response = await axiosInstance.post('api/comment', data);
  return response;
};
