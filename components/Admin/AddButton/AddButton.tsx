import { FC } from 'react';
import Link from 'next/link';
import { Button } from 'components';
import { useAddButton } from './useAddButton';
import { AddButton } from './type';

const AddButton: FC<AddButton> = ({
  className,
  children,
  icon,
  text,
  prop,
  face,
}) => {
  const { isActive, query } = useAddButton({ text });
  return (
    <div className={`${className}`}>
      {isActive(query) && children}
      <Link href={`${prop || ''}?${query}`}>
        {face ? (
          face
        ) : (
          <Button
            text={text}
            style='buttonRed'
            className='flex justify-center items-center gap-2 text-xl !px-2 lg:!px-4 !min-w-[8rem]'
          >
            {icon && icon}
          </Button>
        )}
      </Link>
    </div>
  );
};

export default AddButton;
