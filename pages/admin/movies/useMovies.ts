import { useClickOutSide, useGetUser, useLang } from 'hooks';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getMovies } from 'services';
import { movieActions } from 'store/movieSlice';
import { Movie, RootState } from 'types';

export const useMovies = () => {
  useGetUser();
  const { lang } = useLang();

  const query = useSelector((state: RootState) => state.feed.query);
  const dispatch = useDispatch();
  const { data, isLoading, refetch } = useQuery({
    queryHash: query,
    queryKey: 'movies',
    queryFn: () => getMovies(query),
    retry: 0,
  });

  const movieData = useSelector((state: RootState) => state.movie.movies);
  const movies: Movie[] = data?.data;
  useEffect(() => {
    if (query) refetch();
  }, [query, refetch]);

  const [search, setSearch] = useState(false);
  const handleSearch = () => setSearch(true);
  const ref = useClickOutSide({ cb: () => setSearch(false) });
  return {
    movieData: movies?.slice().reverse(),
    handleSearch,
    isLoading,
    refetch,
    search,
    lang,
    ref,
  };
};
