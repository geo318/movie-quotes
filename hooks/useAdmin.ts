import { useCallback, useEffect } from 'react';
import { useInfiniteQuery, useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { echo, getQuotes, getUser } from 'services';
import { authActions, feedActions } from 'store';
import { RootState } from 'types';

export const useAdmin = () => {
  const feedData = useSelector((state: RootState) => state.feed.feedData);

  const dispatch = useDispatch();
  const { fetchNextPage, hasNextPage, isFetchingNextPage, data } =
    useInfiniteQuery({
      queryKey: ['feed-data'],
      queryFn: ({ pageParam = 1 }) => getQuotes({ page: pageParam }),
      getNextPageParam: (lastPage) => {
        const nextPage = lastPage?.data.current_page + 1;
        if (nextPage > lastPage?.data.last_page) return;
        return nextPage;
      },
    });

  const pages = data?.pages.length;
  const nextBatch = pages && data?.pages[pages - 1].data.data;
  const fetchNextPageData = useCallback(() => {
    if (hasNextPage && pages) {
      fetchNextPage();
      if (pages > 2) {
        dispatch(feedActions.updateFeed(nextBatch));
      }
    }
  }, [pages, hasNextPage, fetchNextPage, nextBatch, dispatch]);

  const firstBatch = data?.pages[0].data.data;
  useEffect(() => {
    if (feedData.length > 0) return;

    if (pages === 1) {
      dispatch(feedActions.updateFeed(firstBatch));
    }
  }, [pages, dispatch, firstBatch, feedData.length]);

  const { data: userData } = useQuery({
    queryKey: 'user',
    queryFn: getUser,
  });
  useEffect(() => {
    dispatch(authActions.setUser(userData?.data.user));
    return () => echo.disconnect();
  }, [dispatch, userData]);

  return {
    quotes: feedData,
    fetchNextPageData,
    pages,
    loading: isFetchingNextPage,
  };
};
