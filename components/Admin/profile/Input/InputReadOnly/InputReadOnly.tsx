import { CheckMark, Info, Warn } from 'components/icons';

const InputReadOnly = ({
  name = '',
  label = '',
  value = '',
  placeholder = '',
  verify = false,
  primary = false,
  password = false,
}) => {
  return (
    <div className='flex grow flex-col w-full lg:max-w-[33rem] justify-start items-start relative'>
      <label htmlFor={name} className='block font-normal text-base pb-2'>
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
          className={`w-full appearance-none outline-none text-lg xl:text-xl border lg:px-3 lg:py-2 lg:rounded-[.25rem] font-normal cursor-auto ${
            primary || verify
              ? primary
                ? 'text-white bg-app-green border-app-green bg-opacity-20 px-3 py-2 rounded-[.25rem]'
                : 'text-white bg-[#EC9524] border-[#EC9524] bg-opacity-20'
              : 'lg:text-app-black lg:bg-app-gray lg:border-app-gray bg-transparent border-transparent border-b-app-gray border-opacity-50 pb-4 rounded-none px-0'
          }`}
          placeholder={placeholder}
          value={password ? '123456789012' : value}
          readOnly
          type={password ? 'password' : 'text'}
        />
        {
          <div className={`absolute top-1/2 -translate-y-1/2 right-[.875rem]`}>
            {verify || primary ? primary ? <CheckMark /> : <Warn /> : null}
          </div>
        }
      </div>
      <div className='h-4' />
    </div>
  );
};

export default InputReadOnly;
