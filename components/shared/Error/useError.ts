import { useTranslation } from 'next-i18next';

export const useError = () => {
  const { t } = useTranslation();
  return { t };
};
