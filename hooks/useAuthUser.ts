import { useSelector } from 'react-redux';
import { RootState, UserData } from 'types';

export const useAuthUser = () => {
  const authUser: UserData = useSelector((state: RootState) => state.auth.user);
  return authUser;
};
