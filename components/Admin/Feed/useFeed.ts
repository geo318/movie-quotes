import { useAuthUser } from 'hooks';
import { useCallback, useRef } from 'react';

export const useFeed = ({
  nextPage,
  loading = false,
}: {
  nextPage: () => void;
  loading: boolean;
}) => {
  const authUser = useAuthUser();
  const observer = useRef<any>();

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
  return { authUser, lastFeedElementRef };
};
