import { useScreenWidth } from 'hooks';
import { useTranslation } from 'next-i18next';

export const useAddEmailButton = () => {
  const isMobile = useScreenWidth();
  const { t } = useTranslation('profile');
  return { isMobile, t };
};
