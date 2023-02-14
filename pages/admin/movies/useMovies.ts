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

  const dispatch = useDispatch();
  const { data, isLoading } = useQuery({
    queryKey: 'movies',
    queryFn: getMovies,
    retry: 0,
  });

  const movieData = useSelector((state: RootState) => state.movie.movies);
  const movies: Movie[] = data?.data;
  useEffect(() => {
    if (!movieData?.length) dispatch(movieActions.updateMovies(movies));
  }, [dispatch, movies, movieData]);

  const [search, setSearch] = useState(false);
  const handleSearch = () => setSearch(true);
  const ref = useClickOutSide({ cb: () => setSearch(false) });
  return { search, handleSearch, movieData, lang, isLoading, ref };
};
