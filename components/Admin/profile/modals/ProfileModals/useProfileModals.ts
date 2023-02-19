import { useRouter } from 'next/router';

export const useProfileModals = () => {
  const router = useRouter();
  const isActive = (query: string) => router.query.hasOwnProperty(query);

  return { isActive };
};
