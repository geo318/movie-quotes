import { ModalProps } from './types';
import { useModalContainer } from './useModalContainer';

const ModalContainer = ({
  children,
  selectRef = null,
  closeRef = null,
  closeOnClick = false,
}: ModalProps) => {
  const { dropdown, ref, onClickOutside } = useModalContainer({
    selectRef,
    closeRef,
  });

  return (
    <>
      {children && dropdown ? (
        <div ref={ref} onClick={() => closeOnClick && onClickOutside()}>
          {children}
        </div>
      ) : null}
    </>
  );
};

export default ModalContainer;
