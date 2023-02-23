import { FC } from 'react';
import { Props } from 'types';
import { ModalLoadingOverlay } from 'components';

const LoadingSlot: FC<Props & { isLoading: boolean }> = ({
  children,
  isLoading,
}) => {
  return <> {isLoading ? <ModalLoadingOverlay /> : <>{children}</>}</>;
};

export default LoadingSlot;
