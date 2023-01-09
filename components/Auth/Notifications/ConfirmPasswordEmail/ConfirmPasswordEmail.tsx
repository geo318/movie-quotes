import { EmailSuccess, NotificationSocket } from 'components';
import { FC } from 'react';

const ConfirmPasswordEmail: FC = () => {
  return (
    <NotificationSocket
      heading='Success!'
      sub='Your Email changed successfully'
      link='/admin'
      icon={<EmailSuccess />}
      callToAction='Go to my news feed'
    />
  );
};

export default ConfirmPasswordEmail;
