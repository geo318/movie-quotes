import { RootState } from 'types';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

export const usePortal = ({ z = false }) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);
  const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);

  useEffect(() => {
    const portal = document.createElement('div');
    portal.setAttribute('id', 'portal');
    portal.classList.add(
      'fixed',
      'inset-0',
      'overflow-y-auto',
      `${isAuth ? 'backdrop-blur-[2px]' : 'backdrop-blur-sm'}`,
      `${isAuth ? 'bg-[#181623]' : 'bg-black'}`,
      `${isAuth ? 'bg-opacity-10' : 'bg-opacity-50'}`,
      `${z ? 'z-50' : ''}`
    );
    document.querySelector<HTMLElement>('body')!.append(portal);
    ref.current = portal;
    setMounted(true);
    return () => portal.remove();
  }, [z, isAuth]);

  return { mounted, ref };
};
