import { deleteCookie } from 'cookies-next';
import Router from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCSRFToken, login } from 'services';
import { authActions, fleshActions } from 'store';
import { SubmitDataProps } from 'types';
import { z } from 'zod';

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const schema = z.object({
    email: z.string().min(1, { message: 'Email is required' }).email(),
    password: z
      .string()
      .min(1, { message: 'Password is required' })
      .regex(/^[a-z0-9]{8,15}$/, 'Incorrect password'),
    remember_me: z.boolean(),
  });

  const handleUserLogin = async (data: SubmitDataProps) => {
    try {
      await fetchCSRFToken();
      const user = await login(data);
      dispatch(authActions.setUser(user.data.user));
      dispatch(authActions.login());
      Router.push('admin');
    } catch (e: any) {
      dispatch(fleshActions.setFleshError(e.response.data));
      deleteCookie('XSRF-TOKEN');
    }
    setIsLoading(false);
  };

  return { schema, handleUserLogin, isLoading };
};
