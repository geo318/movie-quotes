import { deleteCookie, setCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCSRFToken, logout, register, sendEmail } from 'services';
import { authActions } from 'store';
import { z } from 'zod';
import { RegisterProps } from 'types';
import { useAuthUser } from 'hooks';
import { Camera } from 'components/icons';

export const useAddQuoteModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation('home');
  const router = useRouter();
  const dispatch = useDispatch();

  const schema = z.object({
    quote_title_en: z
      .string()
      .regex(
        new RegExp('^[a-zA-Z0-9.,!@#$%^&*()_+-;\':"|,.<>?]+$'),
        'Please, use Latin symbols only'
      ),
    quote_title_ka: z
      .string()
      .regex(
        new RegExp('[^wu10A0-u10FF0-9.,!@#$%^&*()_+-;\':"|,.<>?]+$'),
        'Please, use Georgian symbols only'
      ),
    quote_image: z.object({
      name: z.string(),
      size: z.number(),
    }),
  });

  const onSubmit = async (data: RegisterProps) => {
    console.log(data);
    // try {
    //   setIsLoading(true);
    //   await fetchCSRFToken();
    //   await register(data);
    //   await sendEmail();
    //   router.replace('?check-email');
    //   setCookie('email-sent', true);
    // } catch (e: any) {
    //   await logout();
    //   dispatch(authActions.setFormError(e.response?.data?.errors));
    //   deleteCookie('XSRF-TOKEN');
    // }
    // setIsLoading(false);
  };

  const select = (
    <div>
      <Camera />
    </div>
  );
  const dropdown = <div></div>;

  const user = useAuthUser();
  return { isLoading, schema, onSubmit, user, select, dropdown, t };
};
