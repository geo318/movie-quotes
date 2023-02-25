import { updateUser } from 'services';
import { usernameSchema as schema } from 'schema';
import { usePage } from 'components';
import { useTranslation } from 'next-i18next';

export const useUsernamePage = ({ refetch }: { refetch: () => {} }) => {
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
    schema,
    refetch,
    submitCb: updateUser,
    flashMessage: t('usernameUpdated'),
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
