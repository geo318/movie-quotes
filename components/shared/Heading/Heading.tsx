import { FC } from 'react';
import { HeadingProps } from './types';

const Heading: FC<HeadingProps> = ({
  heading,
  sub,
  className,
  error = false,
  subStyle,
}) => (
  <div className={`flex flex-col items-center gap-3 mb-6 ${className || ''}`}>
    <h1
      className={
        error
          ? 'lg:text-5xl text-2xl leading-7 lg:leading-normal'
          : 'lg:text-3xl text-2xl leading-9'
      }
    >
      {heading}
    </h1>
    <p
      className={`${
        error
          ? 'lg:text-2xl text-base lg:leading-normal'
          : 'text-app-dark-gray text-base'
      } ${subStyle}`}
    >
      {sub}
    </p>
  </div>
);

export default Heading;
