import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMovies } from 'services';
import { z } from 'zod';
import { Movie, RegisterProps } from 'types';
import { useAuthUser } from 'hooks';
import { Arrow, Camera, Divider, InputText } from 'components';
import { useQuery } from 'react-query';

export const useAddQuoteModal = () => {
  const { data, isLoading: isMoviesLoading } = useQuery({
    queryKey: 'movie-list',
    queryFn: getMovies,
  });
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation('home');
  const router = useRouter();
  const dispatch = useDispatch();

  const schema = z.object({
    quote_title_en: z
      .string()
      .regex(
        new RegExp('^[a-zA-Z0-9.,!@#$%^&*()_+-;\':"|,.<>? ]+$'),
        'Please, use Latin symbols only'
      ),
    quote_title_ka: z
      .string()
      .regex(
        new RegExp('^[ა-ჰ0-9.,!@#$%^&*()_+-;\':"|,.<>? ]+$'),
        'Please, use Georgian symbols only'
      ),
    quote_image: z.any(),
    movie_id: z.number().min(1, { message: 'Please, select a movie' }),
  });

  const onSubmit = async (data: RegisterProps) => {
    console.log(data);
    // try {
    //   setIsLoading(true);
    //   await fetchCSRFToken();
    //   await register(data);
    //   await sendEmail();
    //   router.replace('?check-email');
    //   setCookie('email-sent', true);
    // } catch (e: any) {
    //   await logout();
    //   dispatch(authActions.setFormError(e.response?.data?.errors));
    //   deleteCookie('XSRF-TOKEN');
    // }
    // setIsLoading(false);
  };

  const [selector, setSelector] = useState('Choose movie');
  const [id, setId] = useState(0);

  const handleSelector = (sel: string, id: number) => {
    setSelector(() => sel);
    setId(() => id);
  };
  const select = (
    <div>
      <div className='flex items-center cursor-pointer gap-4 w-full px-4 py-5 border border-app-dark-gray rounded-[.25rem] hover:border-white text-xl leading-9'>
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
      <ul className='absolute bg-black rounded-sm inset-x-0 top-2 max-h-80 overflow-y-auto'>
        {movies?.length ? (
          movies.map((m: Movie) => (
            <li
              key={m.id}
              onClick={() => handleSelector(m.movie_title, m.id)}
              className='cursor-pointer hover:bg-white hover:bg-opacity-10'
            >
              <p className='p-4'>{m.movie_title}</p>
              <Divider />
            </li>
          ))
        ) : (
          <li className='p-4'>No movies yet</li>
        )}
      </ul>
    </div>
  );

  const user = useAuthUser();
  return { isLoading, schema, onSubmit, user, select, dropdown, t };
};
