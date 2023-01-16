import { useTranslation } from 'next-i18next';

export const useNavbar = () => {
  const { t } = useTranslation('shared');
  return { t };
};
