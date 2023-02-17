import { Button } from 'components';
import { useLogout } from './useLogout';

const Logout = ({ className = '' }) => {
  const { handleUserLogout, t } = useLogout();
  return (
    <Button
      onClick={handleUserLogout}
      text={t('logOut')}
      className={`${className} text-base px-6`}
    />
  );
};

export default Logout;
