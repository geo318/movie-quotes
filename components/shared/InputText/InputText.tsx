import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { InputProps } from './types';

const InputText: FC<InputProps> = ({
  name,
  label,
  placeholder,
  type = 'text',
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className={errors?.[name] ? 'mb-1' : 'mb-4'}>
      <label htmlFor={name} className='block font-normal text-base pb-2'>
        {label}
        <span className='text-app-red'> *</span>
      </label>
      <input
        className='appearance-none outline-none w-full border px-3 py-[.375rem] border-app-gray rounded-[.25rem] text-app-black text-base font-normal bg-app-gray'
        type={type}
        {...register!(name)}
        placeholder={placeholder}
      />
      {errors?.[name] ? (
        <div className='mt-1'>
          <span className='text-app-red text-sm leading-6'>
            {errors?.[name] && <p>{errors[name]!.message as string}</p>}
          </span>
        </div>
      ) : null}
    </div>
  );
};

export default InputText;
