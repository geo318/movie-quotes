import { useTranslation } from 'next-i18next';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { DialogProps } from './type';

export const useDialog = ({
  handleFormError,
  trigger,
  handleTrigger,
  toggleDialog,
}: DialogProps) => {
  const {
    formState: { isValid, isSubmitSuccessful },
    trigger: triggerValidation,
  } = useFormContext();

  useEffect(() => {
    if (!isValid) return;
    handleFormError && handleFormError(false);
    handleTrigger && handleTrigger();
  }, [isValid, handleFormError, handleTrigger, toggleDialog]);

  useEffect(() => {
    if (isValid) return;
    trigger && triggerValidation();
    trigger && toggleDialog(false);
  }, [trigger, triggerValidation, toggleDialog, isValid]);

  useEffect(() => {
    isSubmitSuccessful && toggleDialog(false);
  }, [isSubmitSuccessful, toggleDialog]);

  const { t } = useTranslation('profile');
  return { t, isValid, isSubmitSuccessful };
};
