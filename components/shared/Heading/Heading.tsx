import { FC } from 'react';
import { HeadingProps } from './types';

const Heading: FC<HeadingProps> = ({
  heading,
  sub,
  className,
  error = false,
}) => (
  <div className={`flex flex-col items-center gap-3 mb-6 ${className || ''}`}>
    <h1 className={error ? 'text-5xl leading-normal' : 'text-3xl leading-9'}>
      {heading}
    </h1>
    <p
      className={
        error ? 'text-2xl leading-normal' : 'text-app-dark-gray text-base'
      }
    >
      {sub}
    </p>
  </div>
);

export default Heading;
