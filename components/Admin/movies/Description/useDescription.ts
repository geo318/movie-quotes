import { useTranslation } from 'next-i18next';

export const useDescription = () => {
  const { t } = useTranslation('shared');
  return { t };
};
