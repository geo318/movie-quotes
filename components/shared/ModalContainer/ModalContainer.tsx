import { useRef, useEffect, useCallback, useState } from 'react';
import { ModalProps } from './types';
import { useModalContainer } from './useModalContainer';

const ModalContainer = ({
  children,
  selectRef = null,
  closeRef = null,
  closeOnClick = false,
}: ModalProps) => {
  const { dropdown, ref, onClickOutside } = useModalContainer({
    selectRef,
    closeRef,
  });

  if (!children) return null;
  return (
    <>
      {dropdown && (
        <div ref={ref} onClick={() => closeOnClick && onClickOutside()}>
          {children}
        </div>
      )}
    </>
  );
};

export default ModalContainer;
