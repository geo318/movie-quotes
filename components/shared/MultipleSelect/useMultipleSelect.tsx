import {
  Arrow,
  Divider,
  InputText,
  Label,
  ModalLoadingOverlay,
} from 'components';
import { useLang } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { getGenres } from 'services';
import { Genre } from 'types';

export const useMultipleSelect = () => {
  const { lang } = useLang();
  const { t } = useTranslation();
  const { data, isLoading } = useQuery({
    queryKey: 'genres',
    queryFn: getGenres,
    retry: 1,
  });
  const [genres, setGenres] = useState<Genre[]>([]);

  const handleGenres = (genre: Genre) =>
    setGenres((prevState) => [...prevState, genre]);
  const handlePop = (id: number) =>
    setGenres((prevState) => prevState.filter((e) => e.id !== id));

  const collection = data?.data;

  const select = (
    <div>
      <div className='flex items-center cursor-pointer gap-4 w-full px-4 py-[.625rem] border border-app-dark-gray rounded-[.25rem] hover:border-white lg:text-xl text-base leading-9'>
        <div className='text-xl text-app-gray'>
          {genres.length ? (
            <Label
              genres={genres}
              cb={handlePop}
              className='mt-0 rounded-none'
              modal
            />
          ) : (
            <span>აირჩიე ჟანრი</span>
          )}
        </div>
        <Arrow className='ml-auto' />
      </div>
      <InputText
        name='genres'
        value={genres}
        type='number'
        inputStyle='hidden'
        select
      />
    </div>
  );

  const dropdown = (
    <div className='relative'>
      {isLoading && <ModalLoadingOverlay />}
      <div className='absolute overflow-hidden rounded-sm z-50 inset-x-0 top-0'>
        <ul className='bg-black max-h-96 overflow-y-auto'>
          {collection?.length ? (
            collection.map((g: Genre) => (
              <li
                key={g.id}
                onClick={() => handleGenres(g)}
                className='cursor-pointer hover:bg-white hover:bg-opacity-10'
              >
                <p className='p-4'>{g.name[lang]}</p>
                <Divider />
              </li>
            ))
          ) : (
            <li className='p-4'>{t('noMoviesYet')}</li>
          )}
        </ul>
      </div>
    </div>
  );
  return { select, dropdown };
};
