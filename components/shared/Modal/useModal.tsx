import State from 'pusher-js/types/src/core/http/state';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'types';

export const useModal = () => {
  const closeRef = useRef(null);
  const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);
  return { closeRef, isAuth };
};
