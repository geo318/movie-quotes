import { hasCookie } from 'cookies-next';
import { useRouter } from 'next/router';

export const useAuth = () => {
  const router = useRouter();
  const isActive = (query: string) => router.query.hasOwnProperty(query);
  const isEmailSent = hasCookie('email-sent');
  const isEmailVerified = hasCookie('email-verified');

  return { isActive, isEmailSent, isEmailVerified };
};
