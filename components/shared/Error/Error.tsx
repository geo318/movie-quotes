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
    <>
      {errors?.[name] ? (
        <div className='mt-1 px-2'>
          <span className='text-app-red text-sm leading-6'>
            {errors[name] && <p>{t(`${errors[name]!.message}`)}</p>}
          </span>
        </div>
      ) : null}
    </>
  );
};

export default Error;
