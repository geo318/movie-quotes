import { InputText, Password, InputReadOnly, Warn } from 'components';
import Link from 'next/link';
import { FC } from 'react';
import { ProfileSubmitProps, Props } from 'types';
import { ProfileInputProps } from './type';
import { useInput } from './useInput';

const Input: FC<ProfileInputProps & Props> = ({
  label,
  control,
  refetch,
  placeholder = '',
  className = '',
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
    isMobile,
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
              <div className={!full ? 'w-full lg:flex lg:gap-8' : 'w-full'}>
                <InputText
                  name={name}
                  className={`w-full lg:max-w-[33rem]`}
                  inputStyle={`text-base xl:text-xl !py-2`}
                  label={label}
                  asterisk={false}
                  placeholder={placeholder}
                />
                {!full && <div className='text-xl lg:min-w-[18rem]' />}
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
            {!control && <div className='text-xl lg:min-w-[18rem]' />}

            {control && (
              <div
                className={`h-16 relative lg:inline-flex flex-1 items-center lg:pt-5 pt-2 lg:text-xl text-base w-full lg:w-auto lg:min-w-[18rem] ${
                  primary && 'hidden'
                } ${verify && 'lg:pt-4 pt-0'}`}
              >
                <div
                  className={`lg:flex lg:items-center ${
                    editable &&
                    'lg:relative absolute right-0 lg:top-auto top-5 flex'
                  } ${!primary && !editable ? 'lg:w-full w-auto' : ''} ${
                    !editable && !primary && !verify ? 'flex' : ''
                  } ${verify ? 'flex flex-row' : ''}`}
                >
                  <div
                    className={`cursor-pointer ${
                      !editable && !verify
                        ? 'border border-white rounded-md lg:border-0 px-4 py-2 lg:p-0'
                        : ''
                    } ${
                      verify
                        ? 'text-[#EC9524] lg:text-white flex items-center gap-2 lg:not-italic'
                        : ''
                    }`}
                    onClick={() => {
                      !isMobile &&
                        editable &&
                        handleFormState(name as ProfileSubmitProps);
                      !editable &&
                        !primary &&
                        !verify &&
                        setPrimaryEmail({ email: value });
                      verify && verifyEmail({ email: value });
                    }}
                  >
                    {verify && (
                      <div className='block lg:hidden'>
                        <Warn />
                      </div>
                    )}
                    {isMobile ? (
                      <Link href={`?${name}`}>{control}</Link>
                    ) : (
                      control
                    )}
                  </div>

                  {!primary && value.includes('@') && (
                    <>
                      <div
                        className={`lg:block hidden border-r h-4 border-app-dark-gray mx-5`}
                      />
                      <div
                        className={`cursor-pointer ml-auto lg:ml-0 ${
                          !editable && 'py-2 lg:p-0'
                        }`}
                        onClick={() => handleRemove(value)}
                      >
                        {t('remove')}
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
