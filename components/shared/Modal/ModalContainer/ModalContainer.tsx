import { FC } from 'react';
import { ModalProps } from './types';
import { useModalContainer } from './useModalContainer';

const ModalContainer: FC<ModalProps> = ({
  children,
  selectRef = null,
  closeRef = null,
  closeOnClick = false,
  modalOpenOnload = false,
  modalControl,
  closeRoute,
}) => {
  const { dropdown, ref, onClickOutside } = useModalContainer({
    selectRef,
    closeRef,
    modalOpenOnload,
    modalControl,
    closeRoute,
  });

  return (
    <>
      {children && dropdown ? (
        <div
          className='z-10 pb-14'
          ref={ref}
          onClick={() => closeOnClick && onClickOutside()}
        >
          {children}
        </div>
      ) : null}
    </>
  );
};

export default ModalContainer;
