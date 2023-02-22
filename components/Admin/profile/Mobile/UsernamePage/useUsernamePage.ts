import { updateUser } from 'services';
import { useZod } from 'hooks';
import { usePage } from 'components';

export const useUsernamePage = ({ refetch }: { refetch: () => {} }) => {
  const { usernameSchema: schema } = useZod();
  const flashMessage = 'Username updated successfully';
  const { toggleDialog, open, goBack, isLoading, onSubmit, t } = usePage({
    refetch,
    schema,
    submitCb: updateUser,
    flashMessage,
  });
  return { toggleDialog, open, goBack, isLoading, onSubmit, t, schema };
};
