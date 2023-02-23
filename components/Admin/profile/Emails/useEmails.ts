import { useScreenWidth } from 'hooks';
import { useTranslation } from 'next-i18next';

export const useEmails = () => {
  const { t } = useTranslation('profile');
  const isMobile = useScreenWidth();
  return { t, isMobile };
};
