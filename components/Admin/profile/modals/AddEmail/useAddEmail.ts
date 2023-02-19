import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmail, addQuote } from 'services';
import { z } from 'zod';
import { Quote } from 'types';
import { useAuthUser, useLang, useZod } from 'hooks';
import { authActions } from 'store';

export const useAddEmail = () => {
  const [image, setImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { EmailSchema: schema } = useZod();
  const { t } = useTranslation('shared');
  const { lang } = useLang();
  const authUser = useAuthUser();
  const router = useRouter();
  const dispatch = useDispatch();

  const handleImage = (img: string) => {
    setImage(img);
  };

  const onSubmit = async (email: { email: string }) => {
    try {
      console.log(email);
      await addEmail(email);
      // setIsLoading(true);
      // await addQuote(quote);
      // router.back();
    } catch (e: any) {
      console.log(e);
      e.message === 'Request failed with status code 422'
        ? dispatch(authActions.setFormError(e?.response?.data?.errors))
        : dispatch(
            authActions.setFormError({
              name: 'email',
              error: 'something wrong',
            })
          );
    }
    setIsLoading(false);
  };

  const user = useAuthUser();
  return {
    isLoading,
    schema,
    onSubmit,
    user,
    handleImage,
    image,
    lang,
    t,
  };
};
