import { updateUser } from 'services';
import { useZod } from 'hooks';
import { usePage } from 'components';

export const usePasswordPage = ({ refetch }: { refetch: () => {} }) => {
  const { passwordSchema: schema } = useZod();
  const flashMessage = 'Password updated successfully';
  const { toggleDialog, open, goBack, isLoading, onSubmit, t } = usePage({
    refetch,
    schema,
    submitCb: updateUser,
    flashMessage,
  });
  return { toggleDialog, open, goBack, isLoading, onSubmit, t, schema };
};
