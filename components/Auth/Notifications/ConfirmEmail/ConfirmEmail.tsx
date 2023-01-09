import { EmailSuccess, NotificationSocket } from 'components';
import { FC } from 'react';

const ConfirmEmail: FC = () => {
  return (
    <NotificationSocket
      heading='Thank you!'
      sub='Your account has been activated.'
      link='/admin'
      icon={<EmailSuccess />}
      callToAction='Go to my news feed'
    />
  );
};
export default ConfirmEmail;
