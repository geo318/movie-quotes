import { hasCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from 'store';

export const useAuth = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isActive = (query: string) => router.query.hasOwnProperty(query);
  const isEmailSent = hasCookie('email-sent');
  const isEmailVerified = hasCookie('email-verified');

  useEffect(() => {
    if (router.query.hasOwnProperty('email'))
      dispatch(authActions.setFormError({ email: router.query.email }));
  }, [router, dispatch]);

  return { isActive, isEmailSent, isEmailVerified };
};
