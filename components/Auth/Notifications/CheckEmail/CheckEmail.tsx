import { EmailSent, NotificationSocket } from 'components';
import { FC } from 'react';
import { useCheckEmail } from './useCheckEmail';

const CheckEmail: FC = () => {
  const { t } = useCheckEmail();
  return (
    <NotificationSocket
      heading={t('check_email_heading') as string}
      sub={t('check_email_sub') as string}
      link='https://gmail.com'
      icon={<EmailSent />}
      callToAction={t('check_email_act') as string}
    />
  );
};

export default CheckEmail;
