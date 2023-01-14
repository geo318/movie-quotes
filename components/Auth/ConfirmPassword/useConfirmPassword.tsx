import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { confirmEmail } from 'services';
import { authActions } from 'store';
import { SubmitDataProps } from 'types';
import { z } from 'zod';

export const useConfirmPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const query: string = router.query['reset-password'] as string;
  const [email, token] = query.split('/').reverse()[0].split('?email=');

  const schema = z
    .object({
      token: z.string(),
      email: z.string(),
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
      await confirmEmail(data);
      router.replace('?reset-success');
      setCookie('password-reset', true);
    } catch (e: any) {
      console.log(e);
      e.message === 'Request failed with status code 422' &&
        dispatch(authActions.setFormError(e?.response?.data?.errors));
    }
    setIsLoading(false);
  };

  return { isLoading, schema, onSubmit, token, email };
};
