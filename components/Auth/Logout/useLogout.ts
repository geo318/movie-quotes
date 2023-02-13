import { deleteCookie, setCookie } from 'cookies-next';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { logout } from 'services';
import { authActions, fleshActions } from 'store';

export const useLogout = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation('shared');
  const router = useRouter();
  const handleUserLogout = async () => {
    try {
      await logout();
      deleteCookie('XSRF-TOKEN');
      dispatch(authActions.logout());
      setCookie('access-token', 0);
      router.replace('/');
    } catch (e: any) {
      dispatch(fleshActions.setFleshError(e.response.data));
    }
  };

  return { handleUserLogout, t };
};
