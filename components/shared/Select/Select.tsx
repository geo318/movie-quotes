import { ModalContainer } from 'components';
import { SelectProps } from './types';
import { useSelect } from './useSelect';

export default function Select({
  children,
  className,
  modalClassName,
  name,
  placeholder,
  value,
  face,
}: SelectProps) {
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
      <ModalContainer selectRef={select} closeOnClick>
        <div className={modalClassName}>{children}</div>
      </ModalContainer>
    </div>
  );
}
