import { FieldErrorsImpl } from 'react-hook-form';
import { useError } from './useError';

const Error = ({
  errors,
  name,
}: {
  errors: Partial<FieldErrorsImpl<{ [x: string]: any }>>;
  name: string;
}) => {
  const { t } = useError();
  return (
    <div className='h-6 flex items-end mt-1'>
      {errors?.[name] ? (
        <div>
          <span className='text-app-red text-sm leading-6'>
            {errors[name] && <p>{t(`${errors[name]!.message}`)}</p>}
          </span>
        </div>
      ) : null}
    </div>
  );
};

export default Error;
