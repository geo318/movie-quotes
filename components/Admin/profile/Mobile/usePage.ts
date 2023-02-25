import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useCloseModal } from 'hooks';
import { authActions, flashActions } from 'store';
import { useRouter } from 'next/router';
import { User } from 'types';
import { UsePageProps } from './types';

export const usePage = ({
  refetch,
  submitCb,
  flashMessage,
  schema,
}: UsePageProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const close = useCloseModal();
  const { t } = useTranslation('profile');
  const dispatch = useDispatch();

  const onSubmit = async (data: Partial<User>) => {
    setIsLoading(true);
    try {
      await submitCb(data);
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

  const [formError, setFormError] = useState(true);
  const [open, setOpen] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const handleTrigger = (bool: boolean) => setTrigger(bool);
  const handleFormError = (bool: boolean) => setFormError(bool);

  const toggleDialog = (bool: boolean) => {
    if (formError) return;
    setOpen(bool);
  };
  const router = useRouter();
  const goBack = () => router.back();

  return {
    handleFormError,
    handleTrigger,
    toggleDialog,
    isLoading,
    onSubmit,
    trigger,
    schema,
    goBack,
    open,
    t,
  };
};
