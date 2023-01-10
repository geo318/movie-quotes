import { useRouter } from 'next/router';
import { hasCookie } from 'cookies-next';

export const useAuth = () => {
  const router = useRouter();
  const isActive = (query: string) => router.query.hasOwnProperty(query);
  const isAuthenticated = hasCookie('XSRF-TOKEN');
  return { isActive };
};
