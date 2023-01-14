import { deleteCookie, setCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { checkEmail, fetchCSRFToken } from 'services';
import { authActions } from 'store';
import { SubmitDataProps } from 'types';
import { z } from 'zod';

export const useForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const schema = z.object({
    email: z.string().min(1, { message: 'Email is required' }).email(),
  });

  const onSubmit = async (data: SubmitDataProps) => {
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

  return { isLoading, schema, onSubmit };
};
