import { EmailSuccess, NotificationSocket } from 'components';
import { FC } from 'react';

import { useConfirmEmail } from './useConfirmEmail';

const ConfirmEmail: FC = () => {
  const { isLoading, goToAdmin, t } = useConfirmEmail();
  return (
    <NotificationSocket
      loading={isLoading}
      heading={t('confirm_email_heading') as string}
      sub={t('confirm_email_sub') as string}
      link='/admin'
      onClick={goToAdmin}
      icon={<EmailSuccess />}
      callToAction={t('confirm_email_act') as string}
    />
  );
};
export default ConfirmEmail;
