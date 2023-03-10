import { ModalContainer } from 'components';
import { FC } from 'react';
import { SelectProps } from './types';
import { useSelect } from './useSelect';

const Select: FC<SelectProps> = ({
  clearDropdown = false,
  children,
  className = '',
  modalClassName = '',
  name,
  placeholder,
  value,
  face,
  closeOnClick = true,
  closeRef,
  onClick,
  intercept = false,
}) => {
  const { select } = useSelect();
  return (
    <div>
      {placeholder ? (
        <input
          id={name ?? ''}
          name={name ?? 'name'}
          className={`bg-transparent cursor-pointer outline-none ${
            className ?? ''
          }`}
          placeholder={placeholder ?? 'placeholder'}
          value={value ?? 'value'}
          ref={select}
          readOnly
        />
      ) : (
        <div
          ref={select}
          onClick={onClick}
          className={`cursor-pointer ${className}`}
        >
          {face}
        </div>
      )}
      {!clearDropdown && (
        <ModalContainer
          selectRef={select}
          closeOnClick={closeOnClick}
          closeRef={closeRef}
          intercept={intercept}
        >
          <div className={modalClassName}>{children}</div>
        </ModalContainer>
      )}
    </div>
  );
};

export default Select;
