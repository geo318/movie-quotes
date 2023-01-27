import { Spinner } from 'components/icons';
import Image from 'next/image';
import { FC } from 'react';
import { AvatarProps } from './types';

const Avatar: FC<AvatarProps> = ({
  img,
  className,
  text,
  subText,
  active = false,
  size,
  loading,
}) => {
  return (
    <div className='flex gap-6'>
      <div
        className={`overflow-hidden flex justify-center items-center rounded-full ${
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

      <div className='flex flex-col justify-center'>
        {text && (
          <p className={subText ? 'text-2xl leading-9' : 'text-xl leading-7'}>
            {text}
          </p>
        )}
        {subText && <p className='text-base'>{subText}</p>}
      </div>
    </div>
  );
};

export default Avatar;
