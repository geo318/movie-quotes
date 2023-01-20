import { useTranslation } from 'next-i18next';

export const useNotificationSocket = () => {
  const { t } = useTranslation('home');
  return { t };
};
