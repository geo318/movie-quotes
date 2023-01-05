import { HandleClickOutside } from './types';

export const handleClickOutside = (
  e: MouseEvent | TouchEvent,
  { selectRef, closeRef, ref, onClickOutside }: HandleClickOutside
): void => {
  if (
    (ref.current && !ref.current.contains(e.target as Node)) ||
    (selectRef && selectRef.current!.contains(e.target as Node)) ||
    (closeRef && closeRef.current!.contains(e.target as Node))
  )
    onClickOutside();
};
