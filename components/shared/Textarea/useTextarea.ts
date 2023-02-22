import { useTranslation } from 'next-i18next';
import { useFormContext } from 'react-hook-form';

export const useTextarea = () => {
  const { t } = useTranslation();
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return { register, errors, t };
};
