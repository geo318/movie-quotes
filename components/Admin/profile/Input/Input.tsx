import { InputText, CheckMark, Warn, Info } from 'components';
import { useInput } from './useInput';

const Input = ({
  name = '',
  label = '',
  placeholder = '',
  control = '',
  primary = false,
  verify = false,
  verified = false,
  full = false,
  value = '',
  checkFormState = (state = false) => {},
  cancel = false,
  editable = false,
  refetch = () => {},
}) => {
  const {
    readOnly,
    handleReadOnly,
    setPrimaryEmail,
    verifyEmail,
    handleRemove,
  } = useInput(checkFormState, refetch, cancel, verified);
  return (
    <>
      <div className={`flex ${!full ? 'gap-8' : ''} items-center`}>
        {(!readOnly || full) && !primary && !verify ? (
          <>
            <InputText
              name={name}
              className={`${!full ? 'w-full max-w-[33rem]' : 'w-full'}`}
              inputStyle='text-base xl:text-xl !py-2'
              label={label}
              asterisk={false}
              placeholder={placeholder}
            />
            {!full && <div className='text-xl' />}
          </>
        ) : (
          <>
            <div className='flex grow flex-col max-w-[33rem] justify-start items-start relative'>
              <label
                htmlFor={name}
                className='block font-normal text-base pb-2'
              >
                {label}
              </label>
              <div className='relative w-full group'>
                {verify && (
                  <div className='group-hover:flex hidden gap-2 px-4 py-5 absolute -top-24 -right-[8rem] bg-white text-app-black-dark text-base rounded-four font-normal'>
                    <Info />
                    <span>Please verify new email address</span>
                    <div
                      className='absolute w-0 transition-all h-0 -bottom-2 left-1/2 -translate-x-1/2
                        border-l-8 border-l-transparent
                        border-t-8 border-t-white
                        border-r-8 border-r-transparent'
                    />
                  </div>
                )}
                <input
                  className={`w-full appearance-none outline-none text-base xl:text-xl
                 border px-3 py-2 rounded-[.25rem] font-normal cursor-auto ${
                   primary || verify
                     ? primary
                       ? 'text-white bg-app-green border-app-green bg-opacity-20'
                       : 'text-white bg-[#EC9524] border-[#EC9524] bg-opacity-20'
                     : 'text-app-black bg-app-gray border-app-gray'
                 }`}
                  placeholder={placeholder}
                  value={value}
                  readOnly
                />
                {
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 right-[.875rem]`}
                  >
                    {verify || primary ? (
                      primary ? (
                        <CheckMark />
                      ) : (
                        <Warn />
                      )
                    ) : null}
                  </div>
                }
              </div>
              <div className='h-4' />
            </div>
            <div className='h-16 inline-flex flex-1 items-center pt-8 text-xl'>
              <div className='flex items-center'>
                <div
                  className='cursor-pointer'
                  onClick={() => {
                    editable && handleReadOnly();
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
          </>
        )}
      </div>
    </>
  );
};
export default Input;
