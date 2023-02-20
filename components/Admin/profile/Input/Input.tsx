import { InputText, CheckMark, Warn } from 'components';
import { useInput } from './useInput';

const Input = ({
  name = '',
  label = '',
  placeholder = '',
  control = '',
  primary = false,
  verify = false,
  full = false,
  value = '',
  checkFormState = (state = false) => {},
  cancel = false,
  editable = false,
}) => {
  const { readOnly, handleReadOnly, setPrimaryEmail, verifyEmail } = useInput(
    checkFormState,
    cancel
  );
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
              <div className='relative w-full'>
                <input
                  className={`w-full appearance-none outline-none text-base xl:text-xl
                 border px-3 py-2 rounded-[.25rem] font-normal ${
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
                    className={`absolute top-1/2 -translate-y-1/2 cursor-pointer right-[.875rem]`}
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
                    <div className='border-r h-2 border-app-dark-gray mx-2' />
                    <div>Remove</div>
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
