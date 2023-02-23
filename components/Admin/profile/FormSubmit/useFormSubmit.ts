import { useTranslation } from 'next-i18next';

export const useFormSubmit = () => {
  const { t } = useTranslation('profile');
  return { t };
};
