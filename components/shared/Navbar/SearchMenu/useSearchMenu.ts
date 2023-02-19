import { useTranslation } from 'next-i18next';
import { useRef } from 'react';

export const useSearchMenu = () => {
  const close = useRef(null);
  const { t } = useTranslation('shared');

  return { t, close };
};
