import { FC } from 'react';
import { Props } from 'types';

const Figure: FC<Props & { count: number }> = ({
  children,
  className,
  count,
}) => {
  return (
    <div className={`flex gap-3 ${className}`}>
      <span className='text-xl'>{count}</span>
      {children}
    </div>
  );
};

export default Figure;
