import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from 'types';

export const useProfileModals = () => {
  const isLoading = useSelector((state: RootState) => state.flash.isLoading);
  const router = useRouter();
  const isActive = (query: string) => router.query.hasOwnProperty(query);

  return { isActive, isLoading };
};
