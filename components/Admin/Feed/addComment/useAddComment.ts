import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from 'services';
import { authActions, feedActions } from 'store';
import { z } from 'zod';
import { AddCommentProps } from 'types';
import { useAuthUser } from 'hooks';

export const useAddComment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const authUser = useAuthUser();
  const dispatch = useDispatch();

  const schema = z.object({
    quote_id: z.string(),
    user_id: z.string(),
    comment: z
      .string()
      .max(500, { message: 'Maximum comment length exceeded' }),
  });

  const onSubmit = async (data: AddCommentProps) => {
    if (!data.comment.length) return;
    try {
      setIsLoading(true);
      await addComment(data);
      dispatch(feedActions.addComment({ ...data, user: authUser }));
    } catch (e: any) {
      e.message === 'Request failed with status code 422' &&
        dispatch(authActions.setFormError(e?.response?.data?.errors));
    }
    setIsLoading(false);
  };

  return { isLoading, schema, onSubmit, authUser };
};
