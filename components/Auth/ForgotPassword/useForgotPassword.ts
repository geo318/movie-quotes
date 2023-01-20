import { deleteCookie, setCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { checkEmail, fetchCSRFToken } from 'services';
import { authActions } from 'store';
import { z } from 'zod';
import { EmailProps } from 'types';

export const useForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation('home');
  const router = useRouter();
  const dispatch = useDispatch();

  const schema = z.object({
    email: z
      .string()
      .min(1, { message: t('err_email_req') as string })
      .email(t('err_email_inc') as string),
  });

  const onSubmit = async (data: EmailProps) => {
    try {
      setIsLoading(true);
      await fetchCSRFToken();
      await checkEmail(data);
      router.replace('?confirm-password');
      setCookie('password-email-sent', true);
    } catch (e: any) {
      e.message === 'Request failed with status code 422' &&
        dispatch(authActions.setFormError(e?.response?.data?.errors));
      deleteCookie('XSRF-TOKEN');
    }
    setIsLoading(false);
  };

  return { isLoading, schema, onSubmit, t };
};
