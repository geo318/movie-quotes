import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addQuote, getMovies } from 'services';
import { z } from 'zod';
import { Movie, Quote } from 'types';
import { useAuthUser, useLang, useZod } from 'hooks';
import {
  Arrow,
  Camera,
  Divider,
  InputText,
  ModalLoadingOverlay,
} from 'components';
import { useQuery } from 'react-query';
import { authActions, feedActions } from 'store';

export const useAddQuoteModal = () => {
  const [image, setImage] = useState('');
  const { data, isLoading: isMoviesLoading } = useQuery({
    queryKey: 'movie-list',
    queryFn: getMovies,
  });
  const [isLoading, setIsLoading] = useState(false);
  const { addQuoteSchema: schema } = useZod();
  const { t } = useTranslation('shared');
  const { lang } = useLang();
  const authUser = useAuthUser();
  const router = useRouter();
  const dispatch = useDispatch();

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

  const [selector, setSelector] = useState(t('chooseMovie'));
  const [id, setId] = useState(0);

  const handleSelector = (sel: string, id: number) => {
    setSelector(sel);
    setId(id);
  };
  const select = (
    <div>
      <div className='flex items-center cursor-pointer gap-4 w-full px-4 py-5 border border-app-dark-gray rounded-[.25rem] hover:border-white lg:text-xl text-base leading-9'>
        <Camera />
        <p>{selector}</p>
        <Arrow className='ml-auto' />
      </div>
      <InputText
        name='movie_id'
        value={id}
        type='number'
        inputStyle='hidden'
        select
      />
    </div>
  );

  const movies = data?.data;
  const dropdown = (
    <div className='relative'>
      {isMoviesLoading && <ModalLoadingOverlay />}
      <ul className='absolute bg-black rounded-sm inset-x-0 top-0 max-h-80 overflow-y-auto'>
        {movies?.length ? (
          movies.map((m: Movie) => (
            <li
              key={m.id}
              onClick={() => handleSelector(m.movie_title[lang], m.id)}
              className='cursor-pointer hover:bg-white hover:bg-opacity-10'
            >
              <p className='p-4'>{m.movie_title[lang]}</p>
              <Divider />
            </li>
          ))
        ) : (
          <li className='p-4'>{t('noMoviesYet')}</li>
        )}
      </ul>
    </div>
  );

  const user = useAuthUser();
  return {
    isLoading,
    schema,
    onSubmit,
    user,
    select,
    dropdown,
    handleImage,
    image,
    t,
  };
};
