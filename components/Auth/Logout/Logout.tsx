import { Button } from 'components';
import { useLogout } from './useLogout';

const Logout = () => {
  const { handleUserLogout, t } = useLogout();
  return (
    <Button
      onClick={handleUserLogout}
      text={t('logOut')}
      className='text-base px-6'
    />
  );
};

export default Logout;
