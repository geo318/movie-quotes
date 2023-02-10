import { useTranslation } from 'next-i18next';
import { z } from 'zod';

export const useSearch = () => {
  const { t } = useTranslation('shared');
  const schema = z.object({
    quote_id: z.string(),
    user_id: z.string(),
    comment: z
      .string()
      .min(3, { message: 'Use at least 3 symbols' })
      .max(100, { message: 'Maximum comment length exceeded' }),
  });

  const onSubmit = async (data: any) => {
    if (!data.comment.length) return;
    // TODO: Submit Data To the Server
  };
  return { onSubmit, schema, t };
};
