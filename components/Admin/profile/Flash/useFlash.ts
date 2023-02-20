import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { flashActions } from 'store';
import { RootState } from 'types';

export const useFlash = () => {
  const [pop, setPop] = useState(false);
  const dispatch = useDispatch();
  const message = useSelector((state: RootState) => state.flash.flash);
  const closePopup = useCallback(() => {
    setPop(false);
    dispatch(flashActions.clearFlashError());
  }, [dispatch]);

  useEffect(() => {
    if (!message) return;
    setPop(true);
    const timer = setTimeout(() => {
      setPop(false);
      closePopup();
    }, 3000);

    return () => clearTimeout(timer);
  }, [message, closePopup]);

  return { message, closePopup, pop };
};
