import { useActiveQuery, useScreenWidth } from 'hooks';
import { useTranslation } from 'next-i18next';

export const useMobile = () => {
  const { t } = useTranslation();
  const isMobile = useScreenWidth();
  const { isActive } = useActiveQuery();
  return { t, isMobile, isActive };
};
