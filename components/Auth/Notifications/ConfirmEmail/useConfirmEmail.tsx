import { deleteCookie, setCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { axiosInstance } from 'services';
import { authActions } from 'store';

export const useConfirmEmail = () => {
  const { t } = useTranslation('home');
  const router = useRouter();
  const dispatch = useDispatch();
  const url = router.asPath;

  const confirmEmail = async () => {
    try {
      await axiosInstance({
        url: url.replace('?confirm-email=', ''),
      });
      setCookie('email-verified', true);
    } catch (e: any) {}
  };

  const { isLoading } = useQuery({
    queryKey: ['verify-registration', router.query.signature],
    queryFn: confirmEmail,
  });

  const goToAdmin = () => {
    deleteCookie('email-sent');
    deleteCookie('email-verified');
    dispatch(authActions.login());
    setCookie('admin', true);
  };
  return { isLoading, goToAdmin, t };
};
