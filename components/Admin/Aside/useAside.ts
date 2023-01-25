import { useRouter } from 'next/router';
const nav = {
  profile: '/admin/profile',
  movies: '/admin/movies',
  feed: '/admin',
};

export const useAside = () => {
  const router = useRouter();
  const path = router.asPath;
  return { nav, path };
};
