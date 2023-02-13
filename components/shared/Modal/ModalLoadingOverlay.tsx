import { Spinner } from 'components';
import { FC } from 'react';

const ModalLoadingOverlay: FC<{ admin?: boolean }> = ({ admin = false }) => (
  <div
    className={`absolute inset-0 ${
      admin
        ? 'bg-app-gradient backdrop-blur-[2px] bg-opacity-30'
        : 'bg-black backdrop-blur-sm bg-opacity-20'
    } flex justify-center items-center`}
  >
    <Spinner />
  </div>
);

export default ModalLoadingOverlay;
