import { useScreenWidth, useDebounce } from 'hooks';
import { useTranslation } from 'next-i18next';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { feedActions } from 'store';

export const useSearch = () => {
  const { t } = useTranslation('shared');
  const isMobile = useScreenWidth();
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce({ query });
  const dispatch = useDispatch();

  useEffect(() => {
    if ((!debouncedQuery || debouncedQuery.length < 3) && debouncedQuery !== '')
      return;
    dispatch(feedActions.setQuery(debouncedQuery));
  }, [debouncedQuery, dispatch]);
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(() => e.target.value);
  };
  return { handleSearch, isMobile, t };
};
