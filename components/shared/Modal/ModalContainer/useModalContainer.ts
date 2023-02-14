import { useEsc } from 'hooks';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ModalProps } from './types';

export const useModalContainer = ({
  selectRef,
  closeRef = null,
  modalOpenOnload,
  modalControl,
  closeRoute,
}: ModalProps) => {
  const router = useRouter();
  const [dropdown, toggleDropdown] = useState(modalOpenOnload);
  const ref = useRef<HTMLDivElement>(null);

  const onClickOutside = useCallback((): void => {
    toggleDropdown((prevState) => !prevState);
    closeRoute && router.back();
  }, [router, closeRoute]);

  useEsc(() => onClickEsc());
  const onClickEsc = () => {
    toggleDropdown(false);
    closeRoute && router.back();
  };

  useEffect(() => modalControl && modalControl(), [modalControl, dropdown]);

  const handleClickOutside = useCallback(
    (e: MouseEvent | TouchEvent): void => {
      if (
        (ref.current && !ref.current.contains(e.target as Node)) ||
        (selectRef && selectRef.current!.contains(e.target as Node)) ||
        (closeRef && closeRef.current?.contains(e.target as Node))
      )
        onClickOutside();
    },
    [onClickOutside, selectRef, closeRef]
  );
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    closeRoute && document.body.classList.add('overflow-y-hidden');
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
      closeRoute && document.body.classList.remove('overflow-y-hidden');
    };
  }, [handleClickOutside, closeRoute]);
  return { dropdown, ref, onClickOutside, handleClickOutside };
};
