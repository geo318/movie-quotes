import { deleteCookie, setCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { axiosInstance, fetchCSRFToken, logout } from 'services';
import { authActions } from 'store';

export const useOAuth = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const url = router.asPath;

  const handleGmailAuth = async () => {
    try {
      const user = await axiosInstance({
        url: 'api/auth/callback' + url.replace('/', ''),
      });
      setCookie('access-token', 1);
      dispatch(authActions.setUser(user.data.user));
      dispatch(authActions.login());
      router.push('admin');
    } catch (e: any) {
      await logout();
      deleteCookie('XSRF-TOKEN');
      setCookie('access-token', 0);
      e.response?.status === 403
        ? router.replace('/403')
        : router.replace('/404');
    }
  };

  const { isLoading, data } = useQuery({
    queryFn: handleGmailAuth,
    retry: 0,
  });
  return { isLoading, data };
};
