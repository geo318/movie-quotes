import { FC } from 'react';
import { InputProps } from 'types';
import { useTextarea } from './useTextarea';

const Textarea: FC<InputProps> = ({
  name,
  label,
  placeholder,
  className = '',
  rows,
  inputStyle = '',
}) => {
  const { register, errors } = useTextarea();

  return (
    <div className={`relative ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className={`absolute right-5 top-3 block lg:text-xl text-base`}
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
        />
        {errors?.[name] ? (
          <div className='mt-1'>
            <span className='text-app-red text-sm leading-6'>
              {errors?.[name] && <p>{errors[name]!.message as string}</p>}
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Textarea;
