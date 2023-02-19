import { useSelector } from 'react-redux';
import { RootState, User } from 'types';

export const useAuthUser = () => {
  const authUser: User = useSelector((state: RootState) => state.auth.user);
  return authUser;
};
