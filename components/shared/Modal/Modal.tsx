import { Close, ModalContainer, Portal } from 'components';
import { FC } from 'react';
import { ModalProps } from './types';
import { useModal } from './useModal';

const Modal: FC<ModalProps> = ({
  children,
  className = '',
  close = true,
  containerStyle = '',
  z,
}) => {
  const { closeRef, isAuth } = useModal();

  return (
    <Portal
      z
      className={`flex lg:items-center items-start justify-center h-full modal bg-gray-900 lg:bg-opacity-0 ${containerStyle}`}
    >
      <ModalContainer modalOpenOnload={true} closeRoute closeRef={closeRef}>
        <div
          className={`${className} lg:max-w-[37.5rem] lg:px-28 px-7 py-[3.25rem] relative w-screen min-h-screen lg:min-h-0 lg:h-auto bg-app-bg rounded-ten`}
        >
          <div
            ref={closeRef}
            className={`${
              isAuth ? 'lg:block' : 'lg:hidden'
            } absolute top-5 right-4 p-3 cursor-pointer z-20`}
          >
            {(close || isAuth) && <Close />}
          </div>
          {children}
        </div>
      </ModalContainer>
    </Portal>
  );
};

export default Modal;
