import { Arrow, Camera, Divider, InputText, Select } from 'components';
import { Movie } from 'types';
import { useSelectMovie } from './useSelectMovie';

const SelectMovie = ({ movies }: { movies: Movie[] }) => {
  const { selector, id, handleSelector, lang, t } = useSelectMovie();
  return (
    <Select
      face={
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
      }
    >
      <div className='relative'>
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
    </Select>
  );
};

export default SelectMovie;
