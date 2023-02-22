import { useScreenWidth } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useWatch } from 'react-hook-form';

export const usePassword = () => {
  const passwordValue: string = useWatch({ name: 'password' });
  const { t } = useTranslation('shared');
  const isLengthCorrect = /^.{8,}$/.test(passwordValue);
  const isLowerCase = /^[0-9a-z]{1,15}$/.test(passwordValue);
  const isMobile = useScreenWidth();
  return { t, passwordValue, isLengthCorrect, isLowerCase, isMobile };
};
