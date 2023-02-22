import { Button } from 'components';
import { FC } from 'react';
import { ProfileProps, Props } from 'types';
import { useFormSubmit } from './useFormSubmit';

const FormSubmit: FC<Partial<ProfileProps & Props>> = ({
  formState,
  setFormState,
  className = '',
}) => {
  const { t } = useFormSubmit();
  return (
    <>
      {formState && (
        <div className={`lg:pb-24 px-20 lg:ml-auto w-full lg:w-auto relative`}>
          <div className={`${className} flex lg:gap-6`}>
            <div
              className='px-2 py-2 cursor-pointer'
              onClick={() => setFormState && setFormState()}
            >
              {t('cancel')}
            </div>
            <Button
              text={t('saveChanges') as string}
              style='buttonRed'
              className='!px-4 ml-auto'
            />
          </div>
        </div>
      )}
    </>
  );
};

export default FormSubmit;
