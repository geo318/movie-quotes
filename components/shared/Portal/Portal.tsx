import { FC } from 'react';
import { createPortal } from 'react-dom';
import { Props } from 'types';
import { usePortal } from './usePortal';

const Portal: FC<Props & { z?: boolean }> = ({ children, className, z }) => {
  const { mounted, ref } = usePortal({ z });
  return mounted && ref.current
    ? createPortal(<div className={className}>{children}</div>, ref.current)
    : null;
};

export default Portal;
