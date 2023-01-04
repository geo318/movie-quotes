import { useRef, useEffect, useCallback } from 'react';
import { ClickProps } from 'types';

const ModalContainer = ({ children, onClickOutside, select }: ClickProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const handleClickOutside = useCallback(
    (e: MouseEvent | TouchEvent): void => {
      if (
        (ref.current && !ref.current.contains(e.target as Node)) ||
        select.current!.contains(e.target as Node)
      )
        onClickOutside();
    },
    [onClickOutside, select]
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () =>
      document.removeEventListener('click', handleClickOutside, true);
  }, [handleClickOutside]);

  if (!children) return null;
  return <div ref={ref}>{children}</div>;
};

export default ModalContainer;
