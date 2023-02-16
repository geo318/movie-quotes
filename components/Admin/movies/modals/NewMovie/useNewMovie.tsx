import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie, getGenres } from 'services';
import { Movie } from 'types';
import { useAuthUser, useCloseModal, useLang, useZod } from 'hooks';
import { useQuery } from 'react-query';
import { authActions } from 'store';

export const useNewMovie = () => {
  const { addMovieSchema: schema } = useZod();
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
  const { lang } = useLang();
  const dispatch = useDispatch();
  const handleClose = useCloseModal();
  const onSubmit = async (movie: Movie) => {
    try {
      await addMovie(movie);
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
    isLoading,
    schema,
    onSubmit,
    user,
    handleImage,
    image,
    genres: data?.data,
    t,
  };
};
