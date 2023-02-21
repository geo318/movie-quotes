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
      <div
        className={`${value.includes('@') ? 'flex-col lg:flex-row' : ''} flex ${
          !full ? 'lg:gap-8' : 'w-full'
        } items-center relative`}
      >
        {(!readOnly || full) && !primary && !verify ? (
          <>
            {!password ? (
              <div className={!full ? 'lg:max-w-[33rem]' : 'w-full'}>
                <InputText
                  name={name}
                  className='w-full'
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
              <div
                className={`h-16 relative lg:inline-flex flex-1 items-center lg:pt-5 pt-2 lg:text-xl text-base w-full lg:w-auto lg:min-w-[18rem] ${
                  primary && 'hidden'
                }`}
              >
                <div
                  className={`lg:flex lg:items-center ${
                    editable &&
                    'lg:relative absolute right-0 lg:top-auto top-5 flex'
                  } ${!primary && !editable ? 'lg:w-full w-auto' : ''} ${
                    !editable && !primary && !verify ? 'flex' : ''
                  }`}
                >
                  <div
                    className={`cursor-pointer ${
                      !editable &&
                      'border border-white rounded-md lg:border-0 px-4 py-2 lg:p-0'
                    }`}
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

                  {!primary && value.includes('@') && (
                    <>
                      <div
                        className={`lg:block hidden border-r h-4 border-app-dark-gray mx-5`}
                      />
                      <div
                        className={`cursor-pointer ml-auto lg:mg-0 ${
                          !editable && 'py-2 lg:p-0'
                        }`}
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
