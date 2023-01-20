import { FC } from 'react';
import { CheckProps } from './types';
import { useCheckbox } from './useCheckbox';

const Checkbox: FC<CheckProps> = ({ name, label, className, children }) => {
  const { register } = useCheckbox();
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
