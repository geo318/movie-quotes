import { Button } from 'components';
import { FC } from 'react';
import { ProfileProps } from 'types';

const FormSubmit: FC<Partial<ProfileProps>> = ({ formState, setFormState }) => {
  return (
    <>
      {formState && (
        <div className='flex gap-6 pb-24 px-20 ml-auto'>
          <div
            className='px-2 py-2 cursor-pointer'
            onClick={() => setFormState && setFormState()}
          >
            Cancel
          </div>
          <Button text='Save changes' style='buttonRed' className='!px-4' />
        </div>
      )}
    </>
  );
};

export default FormSubmit;
