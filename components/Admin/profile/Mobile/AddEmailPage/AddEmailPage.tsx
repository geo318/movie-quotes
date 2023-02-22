import { Button, Dialog, FormWrapper, Input } from 'components';
import Link from 'next/link';
import { useAddEmailPage } from './useAddEmailPage';

const AddEmailPage = ({ refetch }: { refetch: () => {} }) => {
  const { isLoading, schema, onSubmit, t, goBack, open, toggleDialog } =
    useAddEmailPage({ refetch });

  return (
    <>
      <FormWrapper schema={schema} onSubmit={onSubmit} fill>
        <div className='flex flex-col'>
          <div className='flex w-full flex-col pb-14 pt-16'>
            <Input
              name='email'
              full
              placeholder='Enter new email'
              label='Add new email'
              className='!min-h-[3rem]'
            />
          </div>
          <div className='relative'>
            <div className='flex items-end absolute w-full top-32'>
              <div onClick={() => goBack()} className='mr-auto py-2 lg:text-xl'>
                Cancel
              </div>
              <div className='ml-3 mt-10' onClick={() => toggleDialog()}>
                <Button
                  typeButton
                  text={t('add') as string}
                  style='buttonRed'
                  className='!text-xl !px-4'
                  disabled={isLoading}
                />
              </div>
              {open && <Dialog close={toggleDialog} />}
            </div>
          </div>
        </div>
      </FormWrapper>
    </>
  );
};

export default AddEmailPage;
