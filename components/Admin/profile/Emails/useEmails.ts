import { useScreenWidth } from 'hooks';
import { useTranslation } from 'next-i18next';

export const useEmails = () => {
  const { t } = useTranslation();
  const isMobile = useScreenWidth();
  return { t, isMobile };
};
