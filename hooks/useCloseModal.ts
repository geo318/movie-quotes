import { useRouter } from 'next/router';

export const useCloseModal = () => {
  const router = useRouter();
  const baseUrl = router.asPath.split('?').shift();

  const handleClose = () => {
    baseUrl?.includes('admin') ? router.push(baseUrl || '') : router.push('');
  };
  return handleClose;
};
