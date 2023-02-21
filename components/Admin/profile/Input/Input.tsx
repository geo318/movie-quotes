import { InputText, Password, InputReadOnly } from 'components';
import { FC } from 'react';
import { ProfileSubmitProps } from 'types';
import { ProfileInputProps } from './type';
import { useInput } from './useInput';

const Input: FC<ProfileInputProps> = ({
  label,
  control,
  refetch,
  placeholder = '',
  name = '',
  value = '',
  full = false,
  verify = false,
  primary = false,
  editable = false,
  password = false,
  verified = false,
}) => {
  const {
    readOnly,
    handleFormState,
    setPrimaryEmail,
    verifyEmail,
    handleRemove,
    t,
  } = useInput({ refetch, verified, name });
  return (
    <>
      <div className={`flex ${!full ? 'gap-8' : ''} items-center`}>
        {(!readOnly || full) && !primary && !verify ? (
          <>
            {!password ? (
              <div className='w-full max-w-[33rem]'>
                <InputText
                  name={name}
                  className={`${!full ? 'w-full' : 'w-full'}`}
                  inputStyle='text-base xl:text-xl !py-2'
                  label={label}
                  asterisk={false}
                  placeholder={placeholder}
                />
                {!full && <div className='text-xl' />}
              </div>
            ) : (
              <Password />
            )}
          </>
        ) : (
          <>
            <InputReadOnly
              name={name}
              label={label}
              verify={verify}
              primary={primary}
              placeholder={placeholder}
              password={password}
              value={value}
            />

            {control && (
              <div className='h-16 inline-flex flex-1 items-center pt-8 lg:text-xl text-lg lg:min-w-[18rem]'>
                <div className='flex items-center'>
                  <div
                    className='cursor-pointer'
                    onClick={() => {
                      editable && handleFormState(name as ProfileSubmitProps);
                      !editable &&
                        !primary &&
                        !verify &&
                        setPrimaryEmail({ email: value });
                      verify && verifyEmail({ email: value });
                    }}
                  >
                    {control}
                  </div>

                  {!primary && label === 'Email' && (
                    <>
                      <div className='border-r h-4 border-app-dark-gray mx-5' />
                      <div
                        className='cursor-pointer'
                        onClick={() => handleRemove(value)}
                      >
                        Remove
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};
export default Input;
