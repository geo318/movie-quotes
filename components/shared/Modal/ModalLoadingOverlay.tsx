import { Spinner } from 'components';

const ModalLoadingOverlay = () => (
  <div className='absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center'>
    <Spinner />
  </div>
);

export default ModalLoadingOverlay;
