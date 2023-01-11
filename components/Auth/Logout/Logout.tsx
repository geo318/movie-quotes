import { useLogout } from './useLogout';

const Logout = () => {
  const { handleUserLogout } = useLogout();
  return <div onClick={() => handleUserLogout()}>Logout</div>;
};

export default Logout;
