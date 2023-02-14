import { loadText } from 'helpers';
import { FC } from 'react';
import { Movie } from 'types';
import { Label } from 'components';

const Description: FC<{
  movie: Movie;
  isLoading: boolean;
  lang: 'en' | 'ka';
}> = ({ movie, isLoading, lang }) => {
  return (
    <>
      <Label genres={movie?.genres} />
      <div className='text-lg ml-3'>
        Director: &nbsp;
        {loadText(movie?.director[lang])}
      </div>
      <div className='text-lg ml-3'>
        Budget: &nbsp;
        {loadText(parseInt(movie?.budget).toLocaleString('en-DE'))}$
      </div>
      <div className='text-lg ml-3 text-app-gray'>
        {loadText(movie?.description[lang])}
      </div>
    </>
  );
};

export default Description;
