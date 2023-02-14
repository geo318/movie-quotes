import { useDispatch } from 'react-redux';
import { feedActions } from 'store';
import { quoteActions } from 'store/quoteSlice';
import { FeedData } from 'types';

export const useQuoteMenu = () => {
  const dispatch = useDispatch();
  const setQuoteHandler = (quote: FeedData) => {
    dispatch(quoteActions.setQuote(quote));
    dispatch(feedActions.updateFeed([quote]));
  };
  return { setQuoteHandler };
};
