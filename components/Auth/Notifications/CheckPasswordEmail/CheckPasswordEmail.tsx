import { EmailSent, NotificationSocket } from 'components';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';

const CheckPasswordEmail: FC = () => {
  const { t } = useTranslation('home');
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
