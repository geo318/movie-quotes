import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import instance from 'services/axios';

export const useConfirmEmail = () => {
  const router = useRouter();
  const url = router.asPath;
  const XSRF = async () => {
    try {
      await instance({
        url: url.replace('?confirm-email=', ''),
      });
      setCookie('email-verified', true);
    } catch (e) {
      console.log(e);
      router.replace('/404');
    }
  };
  const { isLoading, isError, status, error } = useQuery({
    queryKey: ['verify-registration', router.query.signature],
    queryFn: XSRF,
  });

  return { isLoading, isError, status };
};
