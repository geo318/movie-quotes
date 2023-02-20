import { axiosInstance } from 'services';
import {
  EmailProps,
  LoginProps,
  RegisterProps,
  ResetPasswordProps,
  AddCommentProps,
  Quote,
  FeedData,
  Movie,
} from 'types';

export const fetchCSRFToken = async () => {
  return await axiosInstance.get('sanctum/csrf-cookie');
};

export const getQuotes = async ({ page = 1, query = '*' }) => {
  const url = new URL(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/quotes?page=${page}`
  );
  url.searchParams.set('search', query);
  return await axiosInstance({ url: url.toString() });
};

export const register = async (data: RegisterProps) => {
  return await axiosInstance.post('api/register', data);
};

export const login = async (data: LoginProps) => {
  return await axiosInstance.post('api/login', data);
};

export const logout = async () => {
  return await axiosInstance.get('api/logout');
};

export const checkUser = async ({ cookies }: { cookies?: string }) => {
  return await axiosInstance({
    url: 'api/user',
    headers: {
      Cookie: cookies,
      referer: process.env.NEXT_PUBLIC_FRONT_URL,
    },
  });
};

export const getUser = async () => {
  return await axiosInstance.get('api/user');
};

export const sendEmail = async () => {
  return await axiosInstance.get('api/email/verify');
};

export const checkEmail = async (data: EmailProps) => {
  return await axiosInstance.post('api/forgot-password', data);
};

export const confirmEmail = async (data: ResetPasswordProps) => {
  return await axiosInstance.post('api/reset-password', data);
};

export const gmailAuth = async () => {
  return await axiosInstance.get('api/auth/redirect');
};

export const addComment = async (data: AddCommentProps) => {
  return await axiosInstance.post('api/comment', data);
};

export const addLike = async ({
  userId,
  quoteId,
}: {
  userId: number;
  quoteId: number;
}) => {
  return await axiosInstance.get(
    `api/like?quote_id=${quoteId}&user_id=${userId}&like=1`
  );
};

export const getNotifications = async () => {
  return await axiosInstance.get('api/notifications');
};

export const markAsRead = async ({ id }: { id: number }) => {
  return await axiosInstance.get(`api/mark-as-read?id=${id}`);
};

export const markAllAsRead = async ({ num }: { num: number }) => {
  return await axiosInstance.get(`api/mark-all-as-read?num=${num}`);
};

export const getMovies = async (query = '') => {
  const url = new URL(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movies`);
  if (query) url.searchParams.set('search', query);
  return await axiosInstance({ url: url.toString() });
};

export const getMovie = async (id?: string | string[]) => {
  if (id) {
    return await axiosInstance.get(`api/movie?id=${id}`);
  }
};

export const addQuote = async (data: Quote) => {
  return await axiosInstance.post('api/add-quote', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const updateQuote = async (data: Partial<FeedData>, id: number) => {
  return await axiosInstance.post(
    `api/edit-quote/${id}`,
    { ...data, ...{ _method: 'PATCH' } },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
};

export const deleteQuote = async (id: number) => {
  return await axiosInstance.delete(`api/delete-quote?id=${id}`);
};

export const addMovie = async (data: Movie) => {
  return await axiosInstance.post('api/add-movie', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const updateMovie = async (data: Partial<Movie>, id: number) => {
  return await axiosInstance.post(
    `api/edit-movie/${id}`,
    { ...data, ...{ _method: 'PATCH' } },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
};

export const deleteMovie = async (id: number) => {
  return await axiosInstance.delete(`api/delete-movie/${id}`);
};

export const getGenres = async () => {
  return await axiosInstance.get(`api/genres/`);
};

export const addEmail = async (email: { email: string }) => {
  return await axiosInstance.post('api/add-email', email);
};

export const checkLoggedIn = async ({ cookies = '' }) => {
  return await axiosInstance({
    url: 'api/check',
    headers: {
      Cookie: cookies,
      referer: process.env.NEXT_PUBLIC_FRONT_URL,
    },
  });
};

export const setEmailAsPrimary = async (email: string, id: number) => {
  return await axiosInstance.get(`api/set-primary-email/${id}?email=${email}`);
};
