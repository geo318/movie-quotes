import { useTranslation } from 'next-i18next';

export const useDialog = () => {
  const { t } = useTranslation('profile');
  return { t };
};
