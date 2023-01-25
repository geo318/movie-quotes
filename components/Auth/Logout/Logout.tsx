import { Button } from 'components/shared';
import { useLogout } from './useLogout';

const Logout = () => {
  const { handleUserLogout } = useLogout();
  return (
    <Button
      onClick={handleUserLogout}
      text='Log out'
      className='text-base px-6'
    />
  );
};

export default Logout;
