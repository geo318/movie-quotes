import { FC } from 'react';
import { ProfileProps } from 'types';
import { EmailsPage } from './EmailsPage';
import { useMobile } from './useMobile';

const Mobile: FC<ProfileProps> = ({
  user,
  refetch,
  formState,
  setFormState,
}) => {
  const { t, isActive, isMobile } = useMobile();
  return (
    <>
      {isActive('emails') && (
        <EmailsPage
          user={user}
          refetch={refetch}
          formState={formState}
          setFormState={setFormState}
        />
      )}
    </>
  );
};

export default Mobile;
