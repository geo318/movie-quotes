import { useLang } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

export const useSelectMovie = () => {
  const { lang } = useLang();
  const { t } = useTranslation('shared');
  const value = useWatch({ name: 'movie_id' });
  const { clearErrors } = useFormContext();

  useEffect(() => {
    value && clearErrors(['movie_id']);
    return () => clearErrors(['movie_id']);
  }, [value, clearErrors]);

  const [selector, setSelector] = useState(t('chooseMovie'));
  const [id, setId] = useState(0);

  const handleSelector = (sel: string, id: number) => {
    setSelector(sel);
    setId(id);
  };

  return { selector, id, handleSelector, lang, t };
};
