import { useAdmin, useAuthUser } from 'hooks';
import { useCallback, useRef } from 'react';
import { addLike } from 'services';

export const useFeed = ({
  nextPage,
  loading = false,
}: {
  nextPage: () => void;
  loading: boolean;
  refetch?: () => void;
}) => {
  const authUser = useAuthUser();
  const observer = useRef<IntersectionObserver | null>();
  const { updateFeedState } = useAdmin();

  const handleLike = async ({
    userId,
    quoteId,
  }: {
    userId: number;
    quoteId: number;
  }) => {
    try {
      await addLike({ userId, quoteId });
    } catch (e) {
      updateFeedState({ quoteId });
    }
  };

  const lastFeedElementRef = useCallback(
    (node: any) => {
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
