import { EmailSuccess, NotificationSocket } from 'components';
import { FC } from 'react';

const ConfirmPasswordEmail: FC = () => {
  return (
    <NotificationSocket
      heading='Success!'
      sub='Your Email changed successfully'
      link='/?login'
      icon={<EmailSuccess />}
      callToAction='Log in'
    />
  );
};

export default ConfirmPasswordEmail;
