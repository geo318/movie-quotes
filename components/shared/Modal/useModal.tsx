import { useRef } from 'react';

export const useModal = () => {
  const closeRef = useRef(null);
  return { closeRef };
};
