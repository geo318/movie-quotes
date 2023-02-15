import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addQuote, updateQuote } from 'services';
import { z } from 'zod';
import { FeedData, Quote, RootState } from 'types';
import { useAuthUser, useLang, useZod, useCloseModal } from 'hooks';
import { authActions } from 'store';
import { useSelector } from 'react-redux';
import { useMovieQuote } from '../../MovieQuote';

export const useEditQuote = (refetch: () => {}) => {
  const [image, setImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { handleDelete } = useMovieQuote(refetch);
  const handleClose = useCloseModal();
  const { editQuoteSchema: schema } = useZod();
  const { t } = useTranslation('shared');
  const { lang } = useLang();
  const authUser = useAuthUser();
  const router = useRouter();
  const dispatch = useDispatch();
  const id = useSelector((state: RootState) => state.quote.quote.id);
  const quote = useSelector((state: RootState) =>
    state.feed.feedData.find((e) => e.id === id)
  );

  const handleQuoteDelete = (id?: number) => {
    if (id) {
      handleDelete(id);
      handleClose();
    }
  };

  const handleImage = (img: string) => {
    setImage(img);
  };

  const onSubmit = async (quoteData: Quote) => {
    // console.log(quoteData);
    if (!quote?.id) return;
    try {
      setIsLoading(true);

      const res = await updateQuote(quoteData, quote.id);
      router.back();
    } catch (e: any) {
      console.log(e);
      // e.message === 'Request failed with status code 422'
      //   ? dispatch(authActions.setFormError(e?.response?.data?.errors))
      //   : dispatch(
      //       authActions.setFormError({
      //         name: 'quote_title_ka',
      //         error: 'something wrong',
      //       })
      //     );
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
