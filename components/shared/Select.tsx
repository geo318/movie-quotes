import { useCallback, useState, useRef } from 'react';
import { ModalContainer } from 'components';
import { SelectProps } from 'types';

export default function Select({
  children,
  className,
  modalClassName,
  name,
  placeholder,
  value,
  face,
}: SelectProps) {
  const select = useRef<HTMLInputElement>(null);
  const [dropdown, toggleDropdown] = useState(false);
  const handleSelect = useCallback((): void => {
    toggleDropdown((prevState) => !prevState);
  }, []);

  return (
    <div>
      {placeholder ? (
        <input
          id={name || ''}
          name={name || 'name'}
          className={`bg-transparent cursor-pointer outline-none ${
            className || ''
          }`}
          placeholder={placeholder || 'placeholder'}
          value={value || 'value'}
          ref={select}
          readOnly
        />
      ) : (
        <div ref={select} className={className}>
          {face}
        </div>
      )}
      <ModalContainer onClickOutside={handleSelect} select={select}>
        {dropdown && (
          <div className={modalClassName} onClick={handleSelect}>
            {children}
          </div>
        )}
      </ModalContainer>
    </div>
  );
}
