import { useActiveQuery } from 'hooks';

export const useMobile = () => {
  const { isActive } = useActiveQuery();
  return { isActive };
};
