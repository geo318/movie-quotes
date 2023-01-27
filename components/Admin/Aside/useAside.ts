import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { AuthState, RootState } from 'types';
const nav = {
  profile: '/admin/profile',
  movies: '/admin/movies',
  feed: '/admin',
};

export const useAside = () => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.auth.user);
  const path = router.asPath;
  return { nav, path, user };
};
