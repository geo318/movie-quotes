import { EmailSuccess, NotificationSocket } from 'components';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';

const ConfirmPasswordEmail: FC = () => {
  const { t } = useTranslation('home');
  return (
    <NotificationSocket
      heading={t('reset_email_heading') as string}
      sub={t('reset_email_sub') as string}
      link='/?login'
      icon={<EmailSuccess />}
      callToAction={t('reset_email_act') as string}
    />
  );
};

export default ConfirmPasswordEmail;
