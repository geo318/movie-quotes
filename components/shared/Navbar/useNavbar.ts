import { useScreenWidth } from 'hooks';
import { useTranslation } from 'next-i18next';

export const useNavbar = () => {
  const isMobile = useScreenWidth();
  const { t } = useTranslation('shared');
  return { t, isMobile };
};
