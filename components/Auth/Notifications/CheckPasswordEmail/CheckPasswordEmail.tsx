import { EmailSent, NotificationSocket } from 'components';
import { FC } from 'react';

const CheckPasswordEmail: FC = () => {
  return (
    <NotificationSocket
      heading='Check your email'
      sub='We have sent a password recover instructions to your email'
      link='https://gmail.com'
      icon={<EmailSent />}
      callToAction='Go to my email'
      skip
    />
  );
};

export default CheckPasswordEmail;
