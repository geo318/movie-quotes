import { useRef } from 'react';

export const useSelect = () => {
  const select = useRef<HTMLInputElement>(null);
  return { select };
};
