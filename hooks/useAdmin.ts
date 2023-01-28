import { FeedData } from 'components/Admin/Feed/types';
import { useCallback, useEffect, useState } from 'react';
import { useInfiniteQuery, useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { getQuotes, getUser } from 'services';
import { authActions } from 'store';

export const useAdmin = () => {
  const { fetchNextPage, hasNextPage, isFetchingNextPage, data } =
    useInfiniteQuery({
      queryKey: ['feed-data'],
      queryFn: ({ pageParam = 0 }) => getQuotes({ page: pageParam }),
      getNextPageParam: (lastPage) => {
        const nextPage = lastPage?.data.current_page + 1;
        if (nextPage > lastPage?.data.last_page) return;
        return nextPage;
      },
    });

  const [feedData, setFeedData] = useState<FeedData[]>([]);

  const { data: userData } = useQuery({
    queryKey: 'user',
    queryFn: getUser,
  });
  const pages = data?.pages.length;

  const fetchNextPageData = useCallback(() => {
    if (hasNextPage && pages) {
      fetchNextPage();
      pages > 2 &&
        setFeedData((oldData) => [
          ...oldData,
          ...data?.pages[data?.pages.length - 1].data.data,
        ]);
    }
  }, [pages, hasNextPage, data?.pages, fetchNextPage]);

  useEffect(() => {
    if (pages && pages === 1) setFeedData(data?.pages[0].data.data);
  }, [data?.pages, pages]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authActions.setUser(userData?.data.user));
  }, [dispatch, userData]);

  return {
    quotes: feedData,
    fetchNextPageData,
    pages,
    loading: isFetchingNextPage,
  };
};
