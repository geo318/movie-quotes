import { useTranslation } from 'next-i18next';

export const useFooter = () => {
  const { t } = useTranslation('shared');
  return { t };
};
