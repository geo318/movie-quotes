import { ModalContainer, Portal } from 'components/shared';
import { ModalProps } from './types';

const Modal: React.FC<ModalProps> = ({
  children,
  className,
  handleModalState,
}) => {
  return (
    <Portal className='flex items-center justify-center h-full'>
      <ModalContainer modalOpenOnload={true} modalControl={handleModalState}>
        <div
          className={`w-[600px] h-[800px] bg-[#222030] rounded-[0.625rem] ${className}`}
        >
          {children}
        </div>
      </ModalContainer>
    </Portal>
  );
};

export default Modal;
