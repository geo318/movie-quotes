import { updateUser } from 'services';
import { passwordSchema as schema } from 'schema';
import { usePage } from 'components';
import { useTranslation } from 'next-i18next';

export const usePasswordPage = ({ refetch }: { refetch: () => {} }) => {
  const { t } = useTranslation('profile');
  const {
    open,
    goBack,
    trigger,
    onSubmit,
    isLoading,
    toggleDialog,
    handleTrigger,
    handleFormError,
  } = usePage({
    refetch,
    schema,
    submitCb: updateUser,
    flashMessage: t('passwordUpdated'),
  });

  return {
    handleFormError,
    handleTrigger,
    toggleDialog,
    isLoading,
    onSubmit,
    trigger,
    goBack,
    schema,
    open,
    t,
  };
};
