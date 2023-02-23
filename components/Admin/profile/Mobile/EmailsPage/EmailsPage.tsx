import { AddEmailButton, Divider, Emails, FormSubmit } from 'components';
import { FC } from 'react';
import { ProfileProps } from 'types';

const EmailsPage: FC<ProfileProps> = ({
  user,
  refetch,
  formState,
  setFormState,
}) => {
  return (
    <>
      <div className='flex flex-col gap-6 w-full lg:m-0 mt-8'>
        <Emails user={user} refetch={refetch} />
        <Divider className='!border-app-gray !border-opacity-50' />
        <AddEmailButton />
      </div>
      <FormSubmit formState={formState} setFormState={setFormState} />
    </>
  );
};

export default EmailsPage;
