import { useFormContext } from 'react-hook-form';
import { CheckProps } from './types';

const Checkbox = ({
  name,
  label,
  validation,
  className,
  children,
}: CheckProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className={className}>
      <div className='checkbox'>
        <input
          type='checkbox'
          id={name}
          className='hidden'
          {...register!(name, validation || {})}
        />
        <label htmlFor={name}>{label}</label>
      </div>
      {children}
    </div>
  );
};

export default Checkbox;
