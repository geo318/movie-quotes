import { loadText } from 'helpers';
import { FC } from 'react';
import { Label } from 'components';
import { DescProps } from './types';

const Description: FC<DescProps> = ({ movie, lang }) => {
  return (
    <>
      <Label genres={movie?.genres} />
      <div className='text-lg xl:ml-3'>
        Director: &nbsp;
        {loadText(movie?.director[lang])}
      </div>
      <div className='text-lg xl:ml-3'>
        Budget: &nbsp;
        {loadText(parseInt(movie?.budget).toLocaleString('en-DE'))}$
      </div>
      <div className='text-lg xl:ml-3 text-app-gray'>
        {loadText(movie?.description[lang])}
      </div>
    </>
  );
};

export default Description;
