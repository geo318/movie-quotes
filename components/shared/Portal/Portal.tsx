import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Props } from 'types';

const Portal: React.FC<Props> = ({ children, className }) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const portal = document.createElement('div');
    portal.setAttribute('id', 'portal');
    portal.classList.add(
      'fixed',
      'inset-0',
      'backdrop-blur-sm',
      'bg-black',
      'bg-opacity-50'
    );
    document.querySelector<HTMLElement>('body')!.append(portal);
    ref.current = portal;
    setMounted(true);
    return () => portal.remove();
  }, []);

  return mounted && ref.current
    ? createPortal(<div className={className}>{children}</div>, ref.current)
    : null;
};

export default Portal;
