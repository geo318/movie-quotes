import { deleteCookie } from 'cookies-next';
import Router from 'next/router';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCSRFToken, login } from 'services';
import { authActions } from 'store';
import { z } from 'zod';
import { LoginProps } from 'types';

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation('home');
  const dispatch = useDispatch();
  const schema = z.object({
    email: z
      .string()
      .min(1, { message: t('err_email_req') as string })
      .email(t('err_email_inc') as string),
    password: z
      .string()
      .min(1, { message: t('err_password_req') as string })
      .regex(/^[a-z0-9]{8,15}$/, t('err_password_inc') as string),
    remember_me: z.boolean(),
  });

  const handleUserLogin = async (data: LoginProps) => {
    try {
      await fetchCSRFToken();
      const user = await login(data);
      dispatch(authActions.setUser(user.data.user));
      dispatch(authActions.login());
      Router.push('admin');
    } catch (e: any) {
      dispatch(authActions.setFormError(e.response?.data?.errors));
      deleteCookie('XSRF-TOKEN');
    }
    setIsLoading(false);
  };

  return { schema, handleUserLogin, isLoading, t };
};
