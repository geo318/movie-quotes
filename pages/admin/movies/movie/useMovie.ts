import { useActiveQuery, useGetUser, useLang } from 'hooks';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { getMovie } from 'services';
import { feedActions } from 'store';
import { Movie } from 'types';

export const useMovie = () => {
  useGetUser();
  const { lang } = useLang();
  const router = useRouter();
  const { id } = router.query;
  const { isActive } = useActiveQuery();
  const dispatch = useDispatch();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['movie', id],
    queryFn: () => getMovie(id),
    retry: 1,
  });
  const movie: Movie = data?.data;
  useEffect(() => {
    if (movie) dispatch(feedActions.updateFeed(movie.quotes));
  }, [dispatch, movie]);

  return { lang, movie, isLoading, id, refetch, isActive };
};
