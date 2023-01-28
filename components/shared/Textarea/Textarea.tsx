import { FC } from 'react';
import { InputProps } from './types';
import { useTextarea } from './useTextarea';

const Textarea: FC<InputProps> = ({
  name,
  label,
  placeholder,
  className,
  rows,
}) => {
  const { register } = useTextarea();

  return (
    <div className={`max-w-lg ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className='block font-bold text-[1.375rem] leading-7 mb-6'
        >
          {label}
        </label>
      )}
      <div className='flex flex-col'>
        <textarea
          className='block min-h-[3.25rem] text-xl leading-normal text-[#CED4DA] resize-none h-full max-h-24 w-full rounded-[0.625rem] bg-[#24222F] bg-opacity-60 py-3 px-7'
          placeholder={placeholder}
          id={name}
          {...register!(name)}
          rows={rows}
        />
      </div>
    </div>
  );
};

export default Textarea;
