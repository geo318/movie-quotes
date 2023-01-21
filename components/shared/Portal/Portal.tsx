import { FC } from 'react';
import { createPortal } from 'react-dom';
import { Props } from 'types';
import { usePortal } from './usePortal';

const Portal: FC<Props> = ({ children, className }) => {
  const { mounted, ref } = usePortal();
  return mounted && ref.current
    ? createPortal(<div className={className}>{children}</div>, ref.current)
    : null;
};

export default Portal;
