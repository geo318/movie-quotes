import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie, getGenres, updateMovie } from 'services';
import { Movie } from 'types';
import { useAuthUser, useCloseModal } from 'hooks';
import { useQuery } from 'react-query';
import { authActions } from 'store';
import { editMovieSchema, addMovieSchema } from 'schema';

export const useNewMovie = (id?: number, refetch?: () => void) => {
  const schema = id ? editMovieSchema : addMovieSchema;
  const [image, setImage] = useState('');
  const handleImage = (img: string) => {
    setImage(img);
  };
  const { data, isLoading } = useQuery({
    queryKey: 'genres',
    queryFn: getGenres,
    retry: 1,
  });
  const { t } = useTranslation('shared');
  const dispatch = useDispatch();
  const handleClose = useCloseModal();

  const onSubmit = async (movie: Movie) => {
    try {
      if (id) {
        await updateMovie(movie, id);
      } else {
        await addMovie(movie);
      }
      refetch && refetch();
      handleClose();
    } catch (e: any) {
      e.message === 'Request failed with status code 422'
        ? dispatch(authActions.setFormError(e?.response?.data?.errors))
        : dispatch(
            authActions.setFormError({
              name: 'movie_title_ka',
              error: 'something wrong',
            })
          );
    }
  };

  const user = useAuthUser();
  return {
    genres: data?.data,
    handleImage,
    isLoading,
    onSubmit,
    schema,
    image,
    user,
    t,
  };
};
