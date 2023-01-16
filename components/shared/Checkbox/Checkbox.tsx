import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { CheckProps } from './types';

const Checkbox: FC<CheckProps> = ({ name, label, className, children }) => {
  const { register } = useFormContext();
  return (
    <div className={className}>
      <div className='checkbox'>
        <input
          type='checkbox'
          id={name}
          className='hidden'
          {...register!(name)}
        />
        <label htmlFor={name}>{label}</label>
      </div>
      {children}
    </div>
  );
};

export default Checkbox;
