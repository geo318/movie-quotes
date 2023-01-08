import { ModalContainer, Portal } from 'components/shared';
import { FC } from 'react';
import { ModalProps } from './types';

const Modal: FC<ModalProps> = ({ children, className }) => {
  return (
    <Portal className='flex items-center justify-center h-full modal'>
      <ModalContainer modalOpenOnload={true} close>
        <div className={`w-[600px] bg-app-bg rounded-[0.625rem] ${className}`}>
          {children}
        </div>
      </ModalContainer>
    </Portal>
  );
};

export default Modal;
