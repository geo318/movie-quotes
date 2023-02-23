import { FC } from 'react';
import { InputProps } from 'types';
import { useTextarea } from './useTextarea';
import { Error } from 'components';

const Textarea: FC<InputProps> = ({
  name,
  label,
  placeholder,
  className = '',
  rows = 1,
  inputStyle = '',
  labelStyle = '',
  value,
}) => {
  const { register, errors, t } = useTextarea();

  return (
    <div className={`relative ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className={`${labelStyle} absolute right-5 top-3 block lg:text-xl text-base`}
        >
          {label}
        </label>
      )}
      <div className='flex flex-col'>
        <textarea
          className={`${inputStyle} border border-app-dark-gray focus:outline-none focus:ring-1 focus:ring-white min-h-[5rem] lg:text-2xl text-base leading-normal 
            h-full max-h-36 w-full rounded-[0.25rem] bg-transparent py-2 pl-3 pr-16`}
          placeholder={placeholder}
          id={name}
          {...register!(name)}
          rows={rows}
          defaultValue={value || ''}
        />
        <Error errors={errors} name={name} />
      </div>
    </div>
  );
};

export default Textarea;
