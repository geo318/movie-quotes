import { deleteCookie, setCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCSRFToken, logout, register, sendEmail } from 'services';
import { authActions } from 'store';
import { z } from 'zod';
import { RegisterProps } from 'types';

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation('home');
  const router = useRouter();
  const dispatch = useDispatch();

  const schema = z
    .object({
      username: z
        .string()
        .min(3, { message: t('err_username_req') as string })
        .regex(/[a-z0-9]{3,15}/, t('err_username_inc') as string),
      email: z
        .string()
        .min(1, { message: t('err_email_inc') as string })
        .email(t('err_email_inc') as string),
      password: z
        .string()
        .min(1, { message: t('err_password_req') as string })
        .regex(/^[a-z0-9]{8,15}$/, t('err_password_inc') as string),
      repeat_password: z
        .string()
        .min(1, { message: t('err_password_repeat') as string }),
    })
    .refine((data) => data.password === data.repeat_password, {
      message: t('err_password_match') as string,
      path: ['repeat_password'],
    });

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
    }
    setIsLoading(false);
  };

  return { isLoading, schema, onSubmit, t };
};
