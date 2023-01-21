import { useTranslation } from 'next-i18next';

export const useCheckPasswordEmail = () => {
  const { t } = useTranslation('home');
  return { t };
};
