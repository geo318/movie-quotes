import { useTranslation } from 'next-i18next';
import { useEffect } from 'react';
import { RootState } from 'types';
import { useAuthUser } from 'hooks';
import { useSelector } from 'react-redux';
import { useMovieQuote } from '../../MovieQuote';
import { useCloseModal } from 'hooks/useCloseModal';
import { QuoteModalProps } from '../type';

export const useViewQuote = ({ refetch, quotes }: QuoteModalProps) => {
  const { handleDelete } = useMovieQuote(refetch);
  const handleClose = useCloseModal();
  const { t } = useTranslation('shared');

  const id = useSelector((state: RootState) => state.quote.quote.id);
  const quote = quotes.find((q) => q.id === id);

  const handleQuoteDelete = (id?: number) => {
    if (id) {
      handleDelete(id);
      handleClose();
    }
  };

  useEffect(() => {
    return () => {
      refetch();
    };
  }, [refetch]);

  const user = useAuthUser();
  return {
    handleQuoteDelete,
    user,
    quote,
    t,
  };
};
