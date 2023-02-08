import { useCallback, useEffect, useRef } from 'react';

export const useClickOutSide = ({ cb }: { cb: () => void }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (e: MouseEvent | TouchEvent): void => {
      if (ref.current && !ref.current.contains(e.target as Node)) cb();
    },
    [cb, ref]
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [handleClickOutside]);

  return ref;
};
