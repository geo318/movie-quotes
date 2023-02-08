import { z } from 'zod';

export const useSearch = () => {
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
    try {
      // setIsLoading(true);
      // await addComment(data);
    } catch (e: any) {
      // e.message === 'Request failed with status code 422' &&
      //   dispatch(authActions.setFormError(e?.response?.data?.errors));
    }
    // setIsLoading(false);
  };
  return { onSubmit, schema };
};
