import {
  ClearInput,
  Error,
  Eye,
  EyeHidden,
  InputError,
  InputSuccess,
} from 'components';
import { FC } from 'react';
import { InputProps } from 'types';
import { useInputText } from './useInputText';

const InputText: FC<InputProps> = ({
  name,
  label,
  placeholder,
  type = 'text',
  value,
  inputStyle = '',
  submit = false,
  className = '',
  refObj,
  select = false,
  asterisk = true,
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
    t,
  } = useInputText({ name, value, select });
  return (
    <>
      <div
        className={`${errors?.[name] ? 'mb-1' : 'mb-4'} ${
          type === 'hidden' ? 'hidden' : ''
        } ${className}`}
      >
        {label && (
          <label htmlFor={name} className='block font-normal text-base pb-2'>
            {label}
            {asterisk && <span className='text-app-red'> *</span>}
          </label>
        )}
        <div className='relative'>
          {!select ? (
            <input
              className={`appearance-none outline-none w-full border px-3 py-[.375rem] rounded-[.25rem] text-app-black text-base font-normal bg-app-gray ${
                errors[name] ? 'border-app-red' : 'border-app-gray'
              } ${inputStyle}`}
              type={show ? 'text' : type}
              {...register!(name, {
                onChange: () => {
                  if (value) setValue(name, value);
                },
                onBlur: () => setBlur(true),
              })}
              onFocus={() => setBlur(false)}
              placeholder={placeholder}
            />
          ) : (
            <input
              type='hidden'
              {...register(name)}
              readOnly
              value={value}
              ref={refObj}
            />
          )}
          {type === 'password' && (
            <div
              className='absolute top-1/2 -translate-y-1/2 right-[.875rem] cursor-pointer'
              onClick={toggleShow}
            >
              {show ? <Eye /> : <EyeHidden />}
            </div>
          )}
          {dirtyFields[name] && !submit && (
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

        <Error errors={errors} name={name} />
      </div>
    </>
  );
};

export default InputText;
