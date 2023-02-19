import { useRouter } from 'next/router';

export const useActiveQuery = () => {
  const router = useRouter();
  const isActive = (query: string) => router.query.hasOwnProperty(query);
  return { isActive };
};
