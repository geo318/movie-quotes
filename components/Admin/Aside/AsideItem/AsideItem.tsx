import { FC } from 'react';
import { Props } from 'types';

const AsideItem: FC<Props & { text: string }> = ({ children, text }) => {
  return (
    <div className='flex gap-6'>
      <div className='flex items-center justify-center w-[3.75rem]'>
        {children}
      </div>
      <span className='flex items-center text-2xl leading-9'>{text}</span>
    </div>
  );
};
export default AsideItem;
