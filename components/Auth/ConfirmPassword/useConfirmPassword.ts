import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { confirmEmail } from 'services';
import { authActions } from 'store';
import { confirmPasswordSchema as schema } from 'schema';
import { ResetPasswordProps } from 'types';

export const useConfirmPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation('home');
  const router = useRouter();
  const dispatch = useDispatch();

  const query: string = router.query['reset-password'] as string;
  const [email, token] = query.split('/').reverse()[0].split('?email=');

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
