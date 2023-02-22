import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export const useProfileHeader = () => {
  const router = useRouter();
  const { t } = useTranslation('profile');
  const handleNavigateBack = () => router.back();
  return { t, handleNavigateBack };
};
