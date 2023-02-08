import { useRouter } from 'next/router';
import { z } from 'zod';

export const useAddQuote = () => {
  const router = useRouter();
  const isActive = (query: string) => router.query.hasOwnProperty(query);

  return { isActive };
};
