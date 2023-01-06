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
    <div className='mb-4'>
      <label htmlFor={name} className='block font-normal text-base pb-2'>
        {label}
        <span className='text-app-red'> *</span>
      </label>
      <input
        className='appearance-none outline-none w-full border px-3 py-[.375rem] border-app-gray rounded-[.25rem] text-app-black text-base font-normal bg-app-gray'
        type={type}
        {...register!(name, validation || {})}
        placeholder={placeholder}
      />
      {validation ? (
        <div className='mt-1 ml-5'>
          <span className='text-app-red text-sm leading-5'>
            {errors?.[name] && <p>{errors[name]!.message as string}</p>}
          </span>
        </div>
      ) : null}
    </div>
  );
};

export default InputText;
