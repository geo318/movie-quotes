import { useTranslation } from 'next-i18next';
import { useState } from 'react';

export const useComment = () => {
  const { t } = useTranslation('shared');
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow((show) => !show);
  return { show, toggleShow, t };
};
