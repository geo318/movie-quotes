import { useRouter } from 'next/router';

export const useSearchBar = () => {
  const excludeList = ['profile', 'movies/movie'];
  const router = useRouter();
  const isSearch = excludeList.some((key) => router.asPath.includes(key));
  return { isSearch: !isSearch };
};
