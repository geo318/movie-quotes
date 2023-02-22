import { addEmail } from 'services';
import { useZod } from 'hooks';
import { usePage } from 'components';
import { useTranslation } from 'next-i18next';

export const useAddEmailPage = ({ refetch }: { refetch: () => {} }) => {
  const { emailSchema: schema } = useZod();
  const { t: translate } = useTranslation('profile');
  const { toggleDialog, open, goBack, isLoading, onSubmit, t } = usePage({
    refetch,
    schema,
    submitCb: addEmail,
    flashMessage: translate('emailAdded') as string,
  });
  return { toggleDialog, open, goBack, isLoading, onSubmit, t, schema };
};
