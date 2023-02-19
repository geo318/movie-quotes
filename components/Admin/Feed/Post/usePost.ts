import { useAuthUser, useLang } from 'hooks';
import { useDispatch } from 'react-redux';
import { addLike } from 'services';
import { feedActions } from 'store';

export const usePost = () => {
  const authUser = useAuthUser();
  const dispatch = useDispatch();
  const { lang } = useLang();

  const handleLike = async ({
    userId,
    quoteId,
  }: {
    userId: number;
    quoteId: number;
  }) => {
    try {
      dispatch(feedActions.toggleLike({ userId, quoteId }));
      await addLike({ userId, quoteId });
    } catch {
      dispatch(feedActions.toggleLike({ userId, quoteId }));
    }
  };
  return { authUser, lang, handleLike };
};
