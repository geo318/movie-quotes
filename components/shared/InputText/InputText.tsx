import { InputProps } from '.';
import { useFormContext } from 'react-hook-form';

const InputText: React.FC<InputProps> = ({
  name,
  label,
  placeholder,
  validation,
  type = 'text',
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className='max-w-lg'>
      <label
        htmlFor={name}
        className='block font-bold text-[1.375rem] leading-7 pb-5'
      >
        {label}
      </label>
      <input
        className='appearance-none w-full border border-app-black px-5 py-3 outline-none text-lg left-6 font-normal mb-2 bg-[#EAEAEA]'
        type={type}
        {...register!(name, validation || {})}
        placeholder={placeholder}
      />
      {validation ? (
        <div className='h-5 mb-6 ml-5'>
          <span className='text-[#F15524] text-base leading-5'>
            {errors?.[name] && <p>{errors[name]!.message as string}</p>}
          </span>
        </div>
      ) : null}
    </div>
  );
};

export default InputText;
