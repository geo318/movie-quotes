import { useRouter } from 'next/router';

export const useCloseModal = () => {
  const router = useRouter();
  const baseUrl = router.asPath.split('?').shift();

  const handleClose = () => {
    router.push(baseUrl || '');
  };
  return handleClose;
};
