import { Spinner } from 'components';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { AvatarProps } from './types';

const Avatar: FC<AvatarProps> = ({
  img,
  className = '',
  text = '',
  subText,
  active = false,
  size,
  loading,
  containerStyle = '',
}) => {
  return (
    <div className={`flex gap-6 ${containerStyle}`}>
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
            className='object-cover w-full h-full'
            width={size}
            height={size}
          />
        )}
      </div>

      <div className='flex flex-col justify-center'>
        {text && (
          <p
            className={
              subText ? 'sm:text-2xl text-xl sm:leading-9' : 'text-xl leading-7'
            }
          >
            {text}
          </p>
        )}
        {subText && (
          <Link href='/admin/profile' className='hover:underline'>
            <p className='sm:text-base sm:text-white text-sm text-app-gray'>
              {subText}
            </p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Avatar;
