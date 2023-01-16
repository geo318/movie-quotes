import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { InputProps } from './types';

const Textarea: FC<InputProps> = ({ name, label, placeholder }) => {
  const { register } = useFormContext();

  return (
    <div className='max-w-lg'>
      <label
        htmlFor={name}
        className='block font-bold text-[1.375rem] leading-7 mb-6'
      >
        {label}
      </label>
      <div className='flex flex-col'>
        <textarea
          className='block h-44 max-w-2xl border border-app-black bg-[#EAEAEA] p-5  '
          placeholder={placeholder}
          id={name}
          {...register!(name)}
        />
      </div>
    </div>
  );
};

export default Textarea;
