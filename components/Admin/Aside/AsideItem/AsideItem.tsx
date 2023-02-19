import { FC } from 'react';
import { Props } from 'types';

const AsideItem: FC<Props & { text: string }> = ({ children, text }) => {
  return (
    <div className='flex gap-6'>
      <div className='flex items-center justify-center lg:w-[3.75rem] w-10'>
        {children}
      </div>
      <span className='flex items-center lg:text-2xl text-xl lg:leading-9'>
        {text}
      </span>
    </div>
  );
};
export default AsideItem;
