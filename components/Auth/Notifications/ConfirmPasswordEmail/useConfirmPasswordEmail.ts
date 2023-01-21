import { useTranslation } from 'next-i18next';

export const useConfirmPasswordEmail = () => {
  const { t } = useTranslation('home');
  return { t };
};
