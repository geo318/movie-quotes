import { Close } from 'components';
import { useLang } from 'hooks';
import { FC } from 'react';
import { LabelProps } from './type';

const Label: FC<LabelProps> = ({ genres, className, modal, cb, labelRef }) => {
  const { lang } = useLang();
  return (
    <div className={`${className} flex flex-wrap gap-2 mt-4`} ref={labelRef}>
      {genres?.map((g) => (
        <div
          key={g.id}
          onClick={() => cb && cb(g, g.id)}
          className={`bg-app-dark-gray text-white ${
            modal
              ? 'rounded-sm text-sm px-2 py-1 flex gap-2 items-center'
              : 'rounded-md text-lg px-3 py-[.125rem]'
          } `}
        >
          {g.name[lang]}
          {modal && <Close small />}
        </div>
      ))}
    </div>
  );
};

export default Label;
