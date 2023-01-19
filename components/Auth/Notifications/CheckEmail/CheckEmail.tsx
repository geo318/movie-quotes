import { EmailSent, NotificationSocket } from 'components';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';

const CheckEmail: FC = () => {
  const { t } = useTranslation('home');
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
