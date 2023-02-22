import { deleteCookie } from 'cookies-next';
import Router from 'next/router';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCSRFToken, login } from 'services';
import { authActions } from 'store';
import { loginSchema as schema } from 'schema';
import { LoginProps } from 'types';

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation('home');
  const dispatch = useDispatch();

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
