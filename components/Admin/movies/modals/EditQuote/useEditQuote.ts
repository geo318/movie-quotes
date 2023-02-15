import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuote } from 'services';
import { FeedData, RootState } from 'types';
import { useAuthUser, useLang, useZod, useCloseModal } from 'hooks';
import { authActions } from 'store';
import { QuoteModalProps, useMovieQuote } from 'components';

export const useEditQuote = ({ refetch, quotes }: QuoteModalProps) => {
  const [image, setImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { handleDelete } = useMovieQuote(refetch);
  const handleClose = useCloseModal();
  const { editQuoteSchema: schema } = useZod();
  const { t } = useTranslation('shared');
  const { lang } = useLang();
  const close = useCloseModal();
  const dispatch = useDispatch();
  const id = useSelector((state: RootState) => state.quote.quote.id);
  const quote = quotes.find((q) => q.id === id);

  const handleQuoteDelete = (id?: number) => {
    if (id) {
      handleDelete(id);
      handleClose();
    }
  };

  const handleImage = (img: string) => {
    setImage(img);
  };

  const onSubmit = async (quoteData: Partial<FeedData>) => {
    if (!quote?.id) return;
    try {
      setIsLoading(true);
      await updateQuote(quoteData, quote.id);
      refetch();
      close();
    } catch (e: any) {
      console.log(e);
      e.message === 'Request failed with status code 422'
        ? dispatch(authActions.setFormError(e?.response?.data?.errors))
        : dispatch(
            authActions.setFormError({
              name: 'quote_title_ka',
              error: 'something wrong',
            })
          );
    }
    setIsLoading(false);
  };

  useEffect(() => {
    return () => {
      refetch();
    };
  }, [refetch]);

  const user = useAuthUser();
  return {
    handleQuoteDelete,
    isLoading,
    schema,
    onSubmit,
    user,
    handleImage,
    quote,
    image,
    lang,
    t,
  };
};
