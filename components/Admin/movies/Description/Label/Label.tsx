import { useLang } from 'hooks';
import { FC } from 'react';
import { Genre, Props } from 'types';

const Label: FC<Props & { genres: Genre[] }> = ({ genres, className }) => {
  const { lang } = useLang();
  return (
    <div className={`${className} flex flex-wrap gap-2 mt-4`}>
      {genres?.map((g) => (
        <div
          key={g.id}
          className='px-3 py-[.125rem] bg-app-dark-gray rounded-md text-lg'
        >
          {g.name[lang]}
        </div>
      ))}
    </div>
  );
};

export default Label;
