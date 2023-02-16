import { RefObject } from 'react';
import { Props } from 'types';

export interface ModalProps extends Props {
  selectRef?: RefObject<HTMLElement> | null;
  closeRef?: RefObject<HTMLElement> | null;
  closeOnClick?: boolean;
  modalOpenOnload?: boolean;
  modalControl?: () => void;
  closeRoute?: boolean;
  intercept?: boolean;
}

export interface HandleClickOutside extends ModalProps {
  ref: RefObject<HTMLInputElement>;
  onClickOutside: () => void;
}
