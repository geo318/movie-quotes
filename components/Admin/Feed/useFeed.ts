import { useAuthUser, useClickOutSide } from 'hooks';
import { useCallback, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addLike } from 'services';
import { feedActions, noteActions } from 'store';
import { UseFeedProps } from './types';

export const useFeed = ({ nextPage, loading = false }: UseFeedProps) => {
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
      dispatch(feedActions.toggleLike({ userId, quoteId }));
      await addLike({ userId, quoteId });
    } catch {
      dispatch(feedActions.toggleLike({ userId, quoteId }));
    }
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

  const [search, setSearch] = useState(false);
  const handleSearch = () => setSearch(true);
  const ref = useClickOutSide({ cb: () => setSearch(false) });

  return {
    authUser,
    lastFeedElementRef,
    handleLike,
    search,
    ref,
    handleSearch,
  };
};
