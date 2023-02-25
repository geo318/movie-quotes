import { addEmail } from 'services';
import { usePage } from 'components';
import { useTranslation } from 'next-i18next';
import { emailSchema as schema } from 'schema';

export const useAddEmailPage = ({ refetch }: { refetch: () => {} }) => {
  const { t: translate } = useTranslation('profile');
  const {
    t,
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
    submitCb: addEmail,
    flashMessage: translate('emailAdded') as string,
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
