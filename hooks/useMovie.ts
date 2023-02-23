import { useActiveQuery, useGetUser, useLang } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { getMovie } from 'services';
import { Movie } from 'types';

export const useMovie = () => {
  useGetUser();
  const { lang } = useLang();
  const router = useRouter();
  const { id } = router.query;
  const { isActive } = useActiveQuery();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['movie', id],
    queryFn: () => getMovie(id),
    retry: 1,
  });
  const movie: Movie = data?.data;
  const { t } = useTranslation('shared');
  return { lang, movie, isLoading, id, refetch, isActive, t };
};
