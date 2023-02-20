import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useQuery } from 'react-query';
import { axiosInstance } from 'services';

export const useEmailConfirmed = () => {
  const { t } = useTranslation('home');
  const router = useRouter();
  const url = router.asPath;

  const confirmEmail = async () => {
    try {
      await axiosInstance({
        url: url.replace('admin/profile?confirm-email=', ''),
      });
    } catch (e: any) {
      e?.response?.status === 403
        ? router.replace('/403')
        : router.replace('/admin/profile');
    }
  };
  const { isLoading } = useQuery({
    queryKey: ['verify-registration', router.query.signature],
    queryFn: confirmEmail,
  });

  return { isLoading, t };
};
