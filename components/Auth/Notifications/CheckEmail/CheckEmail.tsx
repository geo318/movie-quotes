import { EmailSent, NotificationSocket } from 'components';
import { FC } from 'react';

const CheckEmail: FC = () => {
  return (
    <NotificationSocket
      heading='Thank you!'
      sub='Please check your email and follow the instructions to activate your account.'
      link='https://gmail.com'
      icon={<EmailSent />}
      callToAction='Go to my email'
    />
  );
};

export default CheckEmail;
