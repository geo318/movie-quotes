import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export const useHome = () => {
  const router = useRouter();
  console.log(router.query);
  const { t } = useTranslation('home');
  return { t };
};
