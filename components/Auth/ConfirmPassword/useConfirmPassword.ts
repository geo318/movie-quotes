import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { confirmEmail } from 'services';
import { authActions } from 'store';
import { z } from 'zod';
import { ResetPasswordProps } from 'types';

export const useConfirmPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation('home');
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

  const onSubmit = async (data: ResetPasswordProps) => {
    try {
      setIsLoading(true);
      await confirmEmail(data);
      router.replace('?reset-success');
      setCookie('password-reset', true);
    } catch (e: any) {
      dispatch(authActions.setFormError(e.response?.data?.errors));
    }
    setIsLoading(false);
  };

  return { isLoading, schema, onSubmit, token, email, t };
};
