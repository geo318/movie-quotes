import { EmailSent, NotificationSocket } from 'components';
import { FC } from 'react';
import { useCheckPasswordEmail } from './useCheckPasswordEmail';

const CheckPasswordEmail: FC = () => {
  const { t } = useCheckPasswordEmail();
  return (
    <NotificationSocket
      heading={t('check_pass_email_heading') as string}
      sub={t('check_pass_email_sub') as string}
      link='https://gmail.com'
      icon={<EmailSent />}
      callToAction={t('check_pass_email_act') as string}
      skip
    />
  );
};

export default CheckPasswordEmail;
