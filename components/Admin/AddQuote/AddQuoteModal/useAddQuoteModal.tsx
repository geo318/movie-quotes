import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addQuote, getMovies } from 'services';
import { Movie, Quote } from 'types';
import { useAuthUser, useLang } from 'hooks';
import {
  Arrow,
  Camera,
  Divider,
  InputText,
  ModalLoadingOverlay,
} from 'components';
import { useQuery } from 'react-query';
import { authActions, feedActions } from 'store';
import { addQuoteSchema as schema } from 'schema';

export const useAddQuoteModal = () => {
  const [image, setImage] = useState('');
  const { data, isLoading: isMoviesLoading } = useQuery({
    queryKey: 'movie-list',
    queryFn: () => getMovies(),
    retry: 1,
  });
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation('shared');
  const { lang } = useLang();
  const authUser = useAuthUser();
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useAuthUser();

  const handleImage = (img: string) => {
    setImage(img);
  };

  const onSubmit = async (quote: Quote) => {
    try {
      setIsLoading(true);
      await addQuote(quote);
      dispatch(
        feedActions.addQuote({
          id: new Date().getDate(),
          quote_image: image,
          quote_title: {
            en: quote.quote_title_en,
            ka: quote.quote_title_ka,
          },
          user: authUser,
          movie: data?.data.find((e: Movie) => e.id === quote.movie_id),
          comments: [],
          likes: [],
          movie_id: 0,
          user_id: authUser.id,
        })
      );
      router.push('/admin');
    } catch (e: any) {
      e.message === 'Request failed with status code 422'
        ? dispatch(authActions.setFormError(e?.response?.data?.errors))
        : dispatch(
            authActions.setFormError({
              name: 'quote_title_ka',
              error: 'something wrong',
            })
          );
    }
    setIsLoading(false);
  };

  return {
    isLoading,
    schema,
    onSubmit,
    user,
    handleImage,
    image,
    movies: data?.data,
    t,
  };
};
