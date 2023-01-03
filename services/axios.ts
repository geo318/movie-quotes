import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

instance.interceptors.response.use(
  async (response) => response,

  async (error) => {
    const status = error?.response?.status;

    if (status === 404) {
      //  TODO: use to redirect to 404 page later
    } else if (status === 403) {
      //  TODO: redirect to 403 page page later
    }

    return Promise.reject(error);
  }
);

export default instance;
