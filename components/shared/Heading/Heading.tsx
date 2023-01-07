import { HeadingProps } from './types';

const Heading = ({ heading, sub, className }: HeadingProps) => (
  <div className={`flex flex-col items-center gap-3 mb-6 ${className}`}>
    <h1 className='text-3xl leading-9'>{heading}</h1>
    <p className='text-app-dark-gray text-base'>{sub}</p>
  </div>
);

export default Heading;
