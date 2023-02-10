import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { z } from 'zod';

export const useAddQuote = () => {
  const router = useRouter();
  const { t } = useTranslation('shared');
  const isActive = (query: string) => router.query.hasOwnProperty(query);

  return { isActive, t };
};
