import { useRouter } from 'next/router';

export const useLang = () => {
  const router = useRouter();
  const lang = (router.locale as 'en' | 'ka') || 'en';
  return { lang };
};
