import { AddEmail } from 'components';
import { useProfileModals } from './useProfileModals';

const ProfileModals = () => {
  const { isActive } = useProfileModals();
  return <>{isActive('add-email') && <AddEmail />}</>;
};

export default ProfileModals;
