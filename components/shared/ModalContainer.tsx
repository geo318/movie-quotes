import { useRef, useEffect, useCallback, useState } from 'react';
import { ClickProps } from 'types';

const ModalContainer = ({
  children,
  selectRef = null,
  closeRef = null,
  closeOnClick = false,
}: ClickProps) => {
  const [dropdown, toggleDropdown] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const onClickOutside = useCallback((): void => {
    toggleDropdown((prevState) => !prevState);
  }, []);

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
