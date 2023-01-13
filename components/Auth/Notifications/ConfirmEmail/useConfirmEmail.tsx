import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import instance from 'services/axios';
import { authActions } from 'store';

export const useConfirmEmail = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const url = router.asPath;

  const confirmEmail = async () => {
    try {
      await instance({
        url: url.replace('?confirm-email=', ''),
      });
      setCookie('email-verified', true);
    } catch (e) {
      return { e };
    }
  };
  const { isLoading, isError } = useQuery({
    queryKey: ['verify-registration', router.query.signature],
    queryFn: confirmEmail,
  });

  isError && router.replace('/404');
  const goToAdmin = () => dispatch(authActions.login());
  return { isLoading, goToAdmin };
};
