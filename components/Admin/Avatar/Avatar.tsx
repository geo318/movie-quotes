import { Spinner } from 'components/icons';
import Image from 'next/image';
import { FC } from 'react';
import { AvatarProps } from './types';

const Avatar: FC<AvatarProps> = ({
  img,
  className,
  details = true,
  text,
  subText,
  active,
  size,
  loading,
}) => {
  return (
    <div className='flex gap-6'>
      <div
        className={`overflow-hidden bg-[#D9D9D9] flex justify-center items-center rounded-full ${
          active && 'border-2 border-app-red'
        } ${className}`}
      >
        {loading ? (
          <Spinner />
        ) : (
          <Image
            src={img}
            alt={`${text} avatar`}
            className='object-cover w-full'
            width={size}
            height={size}
          />
        )}
      </div>

      {details && (
        <div className='flex flex-col justify-center'>
          <p className='text-2xl leading-9'>{text}</p>
          <p className='text-base'>{subText}</p>
        </div>
      )}
    </div>
  );
};

export default Avatar;
