import { useTranslation } from 'next-i18next';
import { useEffect } from 'react';
import { RootState } from 'types';
import { useAuthUser } from 'hooks';
import { useSelector } from 'react-redux';
import { useMovieQuote } from 'components';
import { useCloseModal } from 'hooks';
import { QuoteModalProps } from '../type';

export const useViewQuote = ({ refetch }: QuoteModalProps) => {
  const { handleDelete } = useMovieQuote(refetch);
  const handleClose = useCloseModal();
  const { t } = useTranslation('shared');
  useEffect(() => {
    return () => {
      refetch();
    };
  }, [refetch]);

  const user = useAuthUser();
  const id = useSelector((state: RootState) => state.quote.quote.id);
  const quotes = useSelector((state: RootState) => state.feed.feedData);
  const quote = quotes?.find((q) => q.id === id);

  const handleQuoteDelete = (id?: number) => {
    if (id) {
      handleDelete(id);
      handleClose();
    }
  };

  return {
    handleQuoteDelete,
    user,
    quote,
    t,
  };
};
