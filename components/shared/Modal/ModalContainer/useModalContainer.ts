import { useCallback, useEffect, useRef, useState } from 'react';
import { ModalProps } from './types';

export const useModalContainer = ({
  selectRef,
  closeRef,
  modalOpenOnload,
  modalControl,
}: ModalProps) => {
  const [dropdown, toggleDropdown] = useState(modalOpenOnload);
  const ref = useRef<HTMLDivElement>(null);

  const onClickOutside = useCallback((): void => {
    toggleDropdown((prevState) => !prevState);
  }, []);

  useEffect(() => modalControl && modalControl(), [modalControl, dropdown]);

  const handleClickOutside = useCallback(
    (e: MouseEvent | TouchEvent): void => {
      if (
        (ref.current && !ref.current.contains(e.target as Node)) ||
        (selectRef && selectRef.current!.contains(e.target as Node)) ||
        (closeRef && closeRef.current!.contains(e.target as Node))
      )
        onClickOutside();
    },
    [onClickOutside, selectRef, closeRef]
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () =>
      document.removeEventListener('click', handleClickOutside, true);
  }, [handleClickOutside]);
  return { dropdown, ref, onClickOutside, handleClickOutside };
};
