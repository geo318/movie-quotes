import { addEmail } from 'services';
import { usePage } from 'components';
import { useTranslation } from 'next-i18next';
import { emailSchema as schema } from 'schema';

export const useAddEmailPage = ({ refetch }: { refetch: () => {} }) => {
  const { t: translate } = useTranslation('profile');
  const { toggleDialog, open, goBack, isLoading, onSubmit, t } = usePage({
    refetch,
    schema,
    submitCb: addEmail,
    flashMessage: translate('emailAdded') as string,
  });
  return { toggleDialog, open, goBack, isLoading, onSubmit, t, schema };
};
