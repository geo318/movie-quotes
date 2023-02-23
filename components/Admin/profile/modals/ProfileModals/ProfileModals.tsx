import {
  AddEmail,
  EmailConfirmed,
  Flash,
  ModalLoadingOverlay,
} from 'components';
import { useProfileModals } from './useProfileModals';

const ProfileModals = ({ refetch }: { refetch: () => {} }) => {
  const { isActive, isLoading } = useProfileModals();
  return (
    <>
      {isLoading && (
        <div className='z-50 fixed inset-0 opacity-50'>
          <ModalLoadingOverlay admin />
        </div>
      )}
      {isActive('add-email') && <AddEmail refetch={refetch} />}
      {isActive('confirm-email') && <EmailConfirmed />}
      <Flash />
    </>
  );
};

export default ProfileModals;
