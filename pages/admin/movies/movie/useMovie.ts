import { useGetUser, useLang } from 'hooks';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getMovie } from 'services';
import { feedActions } from 'store';
import { Movie, RootState } from 'types';

export const useMovie = () => {
  useGetUser();
  const { lang } = useLang();
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, refetch, isFetched } = useQuery({
    queryKey: ['movie', id],
    queryFn: () => getMovie(id),
    retry: 1,
  });
  const movie: Movie = data?.data;

  return { lang, movie, isLoading, id, refetch };
};
