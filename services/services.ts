import instance from './axios';

export const fetchCSRFToken = async () => {
  const response = await instance.get('sanctum/csrf-cookie');
  return response;
};

export const getQuotes = () => {
  return instance({ url: 'api/quotes' });
};

export const register = (data: {
  [key: string]: string | boolean | number;
}) => {
  return instance.post('api/register', data);
};

export const sendEmail = () => {
  return instance({ url: 'api/email/verify' });
};
