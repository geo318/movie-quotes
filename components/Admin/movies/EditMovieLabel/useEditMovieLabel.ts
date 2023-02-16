import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { deleteMovie } from 'services';
import { movieActions } from 'store/movieSlice';

export const useEditMovieLabel = () => {
  const router = useRouter();
  const id = router.query.id;
  const path = router.asPath;
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      if (!id) return;
      const movieId = parseInt(`${id}`);
      await deleteMovie(movieId);
      dispatch(movieActions.deleteMovie(movieId));
      router.replace('/admin/movies');
    } catch {}
  };
  return { id, path, handleDelete };
};
