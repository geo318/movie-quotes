import { useClickOutSide, useLang } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { Genre } from 'types';

export const useMultipleSelect = (data: Genre[], selected?: Genre[]) => {
  const { lang } = useLang();
  const { t } = useTranslation();

  const [labelClicked, setLabelClicked] = useState(false);
  const labelRef = useClickOutSide({
    cb: () => setLabelClicked(false),
  });

  const [collection, setCollection] = useState<Genre[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  useEffect(() => {
    if (data && selected) {
      setGenres(selected);
      setCollection(
        data.filter((el) => selected.every((sel) => sel.id !== el.id))
      );
    }
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

  return {
    labelClicked: labelClicked && !!genres?.length,
    handlePop,
    labelRef,
    collection,
    handleSelect,
    genres,
    lang,
    t,
  };
};
