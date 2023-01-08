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
  close,
}) => {
  const { dropdown, ref, onClickOutside } = useModalContainer({
    selectRef,
    closeRef,
    modalOpenOnload,
    modalControl,
    close,
  });

  return (
    <>
      {children && dropdown ? (
        <div
          className='z-10'
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
