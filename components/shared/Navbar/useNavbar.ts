import { useScreenWidth, useSearchBar } from 'hooks';
import { useTranslation } from 'next-i18next';

export const useNavbar = () => {
  const { isSearch } = useSearchBar();
  const isMobile = useScreenWidth();
  const { t } = useTranslation('shared');
  return { t, isMobile, isSearch };
};
