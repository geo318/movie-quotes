import { EmailSuccess, NotificationSocket } from 'components';
import { FC } from 'react';
import { useConfirmPasswordEmail } from './useConfirmPasswordEmail';

const ConfirmPasswordEmail: FC = () => {
  const { t } = useConfirmPasswordEmail();
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
