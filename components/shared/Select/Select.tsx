import { ModalContainer } from 'components';
import { FC } from 'react';
import { SelectProps } from './types';
import { useSelect } from './useSelect';

const Select: FC<SelectProps> = ({
  children,
  className,
  modalClassName,
  name,
  placeholder,
  value,
  face,
  closeOnClick = true,
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
        <div ref={select} className={className}>
          {face}
        </div>
      )}
      <ModalContainer selectRef={select} closeOnClick={closeOnClick}>
        <div className={modalClassName}>{children}</div>
      </ModalContainer>
    </div>
  );
};

export default Select;
