import { updateUser } from 'services';
import { useZod } from 'hooks';
import { usePage } from 'components';
import { useTranslation } from 'next-i18next';

export const usePasswordPage = ({ refetch }: { refetch: () => {} }) => {
  const { passwordSchema: schema } = useZod();
  const { t } = useTranslation('profile');
  const flashMessage: string = t('passwordUpdated');
  const { toggleDialog, open, goBack, isLoading, onSubmit } = usePage({
    refetch,
    schema,
    submitCb: updateUser,
    flashMessage,
  });
  return { toggleDialog, open, goBack, isLoading, onSubmit, t, schema };
};
