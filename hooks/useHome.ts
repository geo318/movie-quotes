import { useTranslation } from 'next-i18next';

export const useHome = () => {
  const { t } = useTranslation('home');
  return { t };
};
