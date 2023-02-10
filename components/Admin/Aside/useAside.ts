import { useAuthUser } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const nav = {
  profile: '/admin/profile',
  movies: '/admin/movies',
  feed: '/admin',
};

export const useAside = () => {
  const { t } = useTranslation('shared');
  const router = useRouter();
  const user = useAuthUser();
  const path = router.asPath;
  return { nav, path, user, t };
};
