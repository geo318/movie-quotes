import axios from 'axios';
import { i18n } from 'next-i18next';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  params: { locale: i18n?.language || 'en' },
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
