import { useTranslation } from 'next-i18next';

export const useCheckEmail = () => {
  const { t } = useTranslation('home');
  return { t };
};
