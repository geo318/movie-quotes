import { useAuthUser } from 'hooks';
import { useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addLike } from 'services';
import { feedActions } from 'store';

export const useFeed = ({
  nextPage,
  loading = false,
}: {
  nextPage: () => void;
  loading: boolean;
  refetch?: () => void;
}) => {
  const authUser = useAuthUser();
  const dispatch = useDispatch();
  const observer = useRef<IntersectionObserver | null>();

  const handleLike = async ({
    userId,
    quoteId,
  }: {
    userId: number;
    quoteId: number;
  }) => {
    try {
      await addLike({ userId, quoteId });
      dispatch(feedActions.toggleLike({ userId, quoteId }));
    } catch {}
  };

  const lastFeedElementRef = useCallback(
    (node: Element) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) nextPage();
      });

      if (node) observer!.current!.observe(node);
    },
    [loading, nextPage]
  );

  return { authUser, lastFeedElementRef, handleLike };
};
