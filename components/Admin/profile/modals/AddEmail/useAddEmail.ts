import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmail } from 'services';
import { useCloseModal, useLang, useZod } from 'hooks';
import { authActions } from 'store';

export const useAddEmail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { EmailSchema: schema } = useZod();
  const close = useCloseModal();
  const { t } = useTranslation('shared');
  const { lang } = useLang();
  const dispatch = useDispatch();

  const onSubmit = async (email: { email: string }) => {
    setIsLoading(true);
    try {
      await addEmail(email);
      close();
    } catch (e: any) {
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

  return {
    isLoading,
    onSubmit,
    schema,
    lang,
    t,
  };
};
