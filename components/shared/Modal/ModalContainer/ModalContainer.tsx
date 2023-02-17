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
  intercept,
}) => {
  const { dropdown, ref, onClickOutside } = useModalContainer({
    selectRef,
    closeRef,
    modalOpenOnload,
    modalControl,
    closeRoute,
    intercept,
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
          {!selectRef && <div className='lg:h-12' />}
        </div>
      ) : null}
    </>
  );
};

export default ModalContainer;
