import { useRouter } from 'next/router';

export const useAuth = () => {
  const router = useRouter();
  const isActive = (query: string) => router.query.hasOwnProperty(query);
  return { isActive };
};
