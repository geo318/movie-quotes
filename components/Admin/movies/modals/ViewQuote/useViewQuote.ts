import { useTranslation } from 'next-i18next';
import { useEffect, useLayoutEffect } from 'react';
import { RootState } from 'types';
import { useAuthUser } from 'hooks';
import { useSelector } from 'react-redux';
import { useMovieQuote } from 'components';
import { useCloseModal } from 'hooks';
import { QuoteModalProps } from '../type';
import { useRouter } from 'next/router';

export const useViewQuote = ({ refetch }: QuoteModalProps) => {
  const { handleDelete } = useMovieQuote(refetch);
  const handleClose = useCloseModal();
  const router = useRouter();
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

  useLayoutEffect(() => {
    if (!quote) router.push(router.asPath.split('?')[0]);
  }, [router, quote]);

  const handleQuoteDelete = (id?: number) => {
    if (id) {
      handleDelete(id);
      handleClose();
    }
  };

  return {
    handleQuoteDelete,
    quote,
    user,
    t,
  };
};
