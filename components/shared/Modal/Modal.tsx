import { Close, ModalContainer, Portal } from 'components';
import { FC, useRef } from 'react';

import { ModalProps } from './types';

const Modal: FC<ModalProps> = ({ children, className = '', close = true }) => {
  const closeRef = useRef(null);
  return (
    <Portal className='flex lg:items-center items-start justify-center h-full modal bg-gray-900 lg:bg-opacity-0'>
      <ModalContainer modalOpenOnload={true} closeRoute closeRef={closeRef}>
        <div
          className={`lg:max-w-[37.5rem] lg:px-28 px-7 py-[3.25rem] relative w-screen h-screen lg:h-auto bg-app-bg rounded-[0.625rem] ${className}`}
        >
          <div ref={closeRef} className='lg:hidden absolute top-5 right-4 p-3'>
            {close && <Close />}
          </div>
          {children}
        </div>
      </ModalContainer>
    </Portal>
  );
};

export default Modal;
