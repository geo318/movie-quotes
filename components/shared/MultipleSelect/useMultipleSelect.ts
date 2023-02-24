import { useClickOutSide, useLang } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { Genre } from 'types';

export const useMultipleSelect = (data: Genre[], selected?: Genre[]) => {
  const { lang } = useLang();
  const { t } = useTranslation('shared');
  const value = useWatch({ name: 'genres' });
  const [labelClicked, setLabelClicked] = useState(false);
  const labelRef = useClickOutSide({
    cb: () => setLabelClicked(false),
  });
  const [collection, setCollection] = useState<Genre[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const { clearErrors } = useFormContext();

  useEffect(() => {
    value && clearErrors(['genres']);
    return () => clearErrors(['genres']);
  }, [value, clearErrors]);

  useEffect(() => {
    if (!selected?.length) {
      setCollection(() => data);
      return;
    }
    setGenres(selected);
    setCollection(
      data.filter((el) => selected.every((sel) => sel.id !== el.id))
    );
  }, [selected, data]);

  const handleSelect = (genre: Genre, id: number) => {
    setCollection((prevState) => prevState.filter((g) => g.id !== id));
    setGenres((prevState) => [...prevState, genre]);
  };

  const handlePop = (genre: Genre, id: number) => {
    setCollection((prevState: Genre[]) => [genre, ...prevState]);
    setGenres((prevState) => prevState.filter((e) => e.id !== id));
    setLabelClicked(true);
  };

  const genresList =
    collection?.length || genres?.length === data?.length ? collection : data;

  return {
    labelClicked: labelClicked && !!genres?.length,
    handlePop,
    labelRef,
    genresList,
    handleSelect,
    genres,
    lang,
    t,
  };
};
