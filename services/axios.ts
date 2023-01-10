import axios from 'axios';
import { useRouter } from 'next/router';

const instance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

instance.interceptors.response.use(
  async (response) => response,

  async (error) => {
    const status = error?.response?.status;

    if (status === 401) {
      return { status: 404, message: 'unauthorized' };
    }

    if (status === 403) {
      return { status: 403 };
    }

    if (status === 404) {
      return { status: 404 };
    }

    return Promise.reject(error);
  }
);

export default instance;
