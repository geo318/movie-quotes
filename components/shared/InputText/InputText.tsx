import {
  ClearInput,
  Eye,
  EyeHidden,
  InputError,
  InputSuccess,
} from 'components';
import { FC } from 'react';

import { InputProps } from './types';
import { useInputText } from './useInputText';

const InputText: FC<InputProps> = ({
  name,
  label,
  placeholder,
  type = 'text',
  value,
}) => {
  const {
    register,
    errors,
    dirtyFields,
    show,
    toggleShow,
    blur,
    setBlur,
    setValue,
  } = useInputText();
  return (
    <>
      <div
        className={`${errors?.[name] ? 'mb-1' : 'mb-4'} ${
          type === 'hidden' ? 'hidden' : ''
        }`}
      >
        <label htmlFor={name} className='block font-normal text-base pb-2'>
          {label}
          <span className='text-app-red'> *</span>
        </label>
        <div className='relative'>
          <input
            className={`appearance-none outline-none w-full border px-3 py-[.375rem] rounded-[.25rem] text-app-black text-base font-normal bg-app-gray ${
              errors[name] ? 'border-app-red' : 'border-app-gray'
            }`}
            type={show ? 'text' : type}
            value={value}
            {...register!(name, {
              onBlur: () => setBlur(true),
            })}
            onFocus={() => setBlur(false)}
            placeholder={placeholder}
          />
          {type === 'password' && (
            <div
              className='absolute top-1/2 -translate-y-1/2 right-[.875rem] cursor-pointer'
              onClick={toggleShow}
            >
              {show ? <Eye /> : <EyeHidden />}
            </div>
          )}
          {dirtyFields[name] && (
            <div
              className={`absolute top-1/2 -translate-y-1/2 cursor-pointer ${
                type === 'password' ? 'right-8' : 'right-[.875rem]'
              }`}
            >
              {errors[name] ? (
                <InputError />
              ) : blur ? (
                <InputSuccess />
              ) : (
                <ClearInput onClick={() => setValue(name, '')} />
              )}
            </div>
          )}
        </div>

        {errors?.[name] ? (
          <div className='mt-1'>
            <span className='text-app-red text-sm leading-6'>
              {errors?.[name] && <p>{errors[name]!.message as string}</p>}
            </span>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default InputText;
