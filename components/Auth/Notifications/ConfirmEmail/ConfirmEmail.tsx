import { EmailSuccess, NotificationSocket } from 'components';
import { FC } from 'react';
import { useConfirmEmail } from './useConfirmEmail';

const ConfirmEmail: FC = () => {
  const { isLoading, goToAdmin } = useConfirmEmail();
  return (
    <NotificationSocket
      loading={isLoading}
      heading='Thank you!'
      sub='Your account has been activated.'
      link='/admin'
      onClick={goToAdmin}
      icon={<EmailSuccess />}
      callToAction='Go to my news feed'
    />
  );
};
export default ConfirmEmail;
