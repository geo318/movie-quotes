import Image from 'next/image';
import { FC } from 'react';
import { AvatarProps } from './types';

const Avatar: FC<AvatarProps> = ({
  img,
  className,
  details = true,
  text,
  subText,
  size,
  active,
}) => {
  return (
    <div className='flex gap-6'>
      <Image
        src={img}
        alt={`${text} avatar`}
        height={size}
        width={size}
        className={`${
          active && 'ring-2 ring-inset ring-app-red'
        } rounded-full ${className}`}
      />
      <div className='flex flex-col justify-center'>
        <p className='text-2xl leading-9'>{text}</p>
        <p className='text-base'>{subText}</p>
      </div>
    </div>
  );
};

export default Avatar;
