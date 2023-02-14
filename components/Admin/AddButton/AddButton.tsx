import { Props } from 'types';
import { FC } from 'react';
import Link from 'next/link';
import { Button, AddMovieModal } from 'components';
import { useAddButton } from './useAddButton';

const AddButton: FC<
  Props & { text: string; icon?: JSX.Element; prop?: string | string[] }
> = ({ className, children, icon, text, prop }) => {
  const { isActive, query } = useAddButton({ text });
  return (
    <div className={`${className}`}>
      {isActive(query) && children}
      <Link href={`${prop || ''}?${query}`}>
        <Button
          text={text}
          style='buttonRed'
          className='flex justify-center items-center gap-2 text-xl'
        >
          {icon && icon}
        </Button>
      </Link>
    </div>
  );
};

export default AddButton;
