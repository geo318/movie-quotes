import { Modal, ModalLoadingOverlay } from 'components';
import { useOAuth } from './useOAuth';

const OAuth = () => {
  useOAuth();
  return (
    <Modal className='w-full h-full'>
      <ModalLoadingOverlay />
    </Modal>
  );
};
export default OAuth;
