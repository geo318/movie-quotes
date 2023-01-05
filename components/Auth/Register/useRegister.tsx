import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from 'store';

export const useRegister = () => {
  const dispatch = useDispatch();
  const handleModalState = useCallback(() => {
    dispatch(authActions.toggleRegister());
  }, [dispatch]);
  return { handleModalState };
};
