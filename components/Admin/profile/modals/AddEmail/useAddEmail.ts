import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmail } from 'services';
import { useCloseModal, useLang, useZod } from 'hooks';
import { authActions, flashActions } from 'store';

export const useAddEmail = ({ refetch }: { refetch: () => {} }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { EmailSchema: schema } = useZod();
  const close = useCloseModal();
  const { t } = useTranslation('shared');
  const { lang } = useLang();
  const dispatch = useDispatch();

  const onSubmit = async (email: { email: string }) => {
    setIsLoading(true);
    const flashMessage = `New email added - ${email.email}`;
    try {
      await addEmail(email);
      refetch();
      dispatch(flashActions.setFlashMessage(flashMessage));
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
