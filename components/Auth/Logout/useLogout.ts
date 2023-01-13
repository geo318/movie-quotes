import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { logout } from 'services';
import { authActions, fleshActions } from 'store';

export const useLogout = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleUserLogout = async () => {
    try {
      await logout();
      deleteCookie('XSRF-TOKEN');
      deleteCookie('logged');
      deleteCookie('email-sent');
      deleteCookie('email-verified');
      dispatch(authActions.logout());
      router.replace('/');
    } catch (e: any) {
      dispatch(fleshActions.setFleshError(e.response.data));
    }
  };

  return { handleUserLogout };
};
