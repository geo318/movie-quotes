import { useScreenWidth } from 'hooks';

export const useAdminLayout = () => {
  const isMobile = useScreenWidth();
  return { isMobile };
};
