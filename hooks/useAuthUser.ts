import { useSelector } from 'react-redux';
import { RootState } from 'types';

export const useAuthUser = () => {
  const authUser = useSelector((state: RootState) => state.auth.user);
  return authUser;
};
