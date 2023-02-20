import { AddEmail, EmailConfirmed } from 'components';
import { useProfileModals } from './useProfileModals';

const ProfileModals = () => {
  const { isActive } = useProfileModals();
  return (
    <>
      {isActive('add-email') && <AddEmail />}
      {isActive('confirm-email') && <EmailConfirmed />}
    </>
  );
};

export default ProfileModals;
