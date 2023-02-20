import { EmailSuccess, Popup } from 'components';
import { FC } from 'react';
import { useEmailConfirmed } from './useEmailConfirmed';

const EmailConfirmed: FC = () => {
  const { isLoading, t } = useEmailConfirmed();
  return (
    <Popup
      icon={<EmailSuccess />}
      loading={isLoading}
      heading='Success!'
      sub='Email has been confirmed.'
    />
  );
};
export default EmailConfirmed;
