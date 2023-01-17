import { deleteCookie, setCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCSRFToken, logout, register, sendEmail } from 'services';
import { authActions } from 'store';
import { SubmitDataProps } from 'types';
import { z } from 'zod';

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const schema = z
    .object({
      username: z
        .string()
        .min(3, { message: 'Username is required' })
        .regex(/[a-z0-9]{3,15}/, 'Invalid username'),
      email: z.string().min(1, { message: 'Email is required' }).email(),
      password: z
        .string()
        .min(1, { message: 'Password is required' })
        .regex(/^[a-z0-9]{8,15}$/, 'Incorrect password'),
      repeat_password: z
        .string()
        .min(1, { message: 'Please, repeat password' }),
    })
    .refine((data) => data.password === data.repeat_password, {
      message: "Passwords don't match",
      path: ['repeat_password'],
    });

  const onSubmit = async (data: SubmitDataProps) => {
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

  return { isLoading, schema, onSubmit };
};
