import { deleteCookie, setCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCSRFToken, logout, register, sendEmail } from 'services';
import { authActions } from 'store';
import { RegisterProps } from 'types';
import { registerSchema as schema } from 'schema';

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation('home');
  const router = useRouter();
  const dispatch = useDispatch();

  const onSubmit = async (data: RegisterProps) => {
    try {
      setIsLoading(true);
      await fetchCSRFToken();
      await register(data);
      await sendEmail();
      router.replace('?check-email');
      setCookie('email-sent', true);
    } catch (e: any) {
      await logout();
      dispatch(authActions.setFormError(e.response?.data?.errors));
      deleteCookie('XSRF-TOKEN');
      deleteCookie('email-sent');
    }
    setIsLoading(false);
  };

  return { isLoading, schema, onSubmit, t };
};
