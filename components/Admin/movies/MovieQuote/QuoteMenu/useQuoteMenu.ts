import { useTranslation } from 'next-i18next';
import { useDispatch } from 'react-redux';
import { feedActions } from 'store';
import { quoteActions } from 'store/quoteSlice';
import { FeedData } from 'types';

export const useQuoteMenu = () => {
  const { t } = useTranslation('shared');
  const dispatch = useDispatch();
  const setQuoteHandler = (quote: FeedData) => {
    dispatch(quoteActions.setQuote(quote));
    dispatch(feedActions.updateFeed([quote]));
  };
  return { setQuoteHandler, t };
};
