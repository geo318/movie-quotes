import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';
import { getQuote } from 'services';
import { feedActions } from 'store';
import { RootState } from 'types';

export const useReadQuote = (id?: number) => {
  const { data, isFetched } = useQuery({
    queryFn: () => getQuote(id),
    retry: 1,
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(feedActions.addQuote(data?.data));
  }, [dispatch, data?.data, isFetched]);

  const quote = useSelector((state: RootState) => state.feed.feedData)?.filter(
    (f) => f?.id === id
  );

  return { quote };
};
