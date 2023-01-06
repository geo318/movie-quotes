import { Props } from 'types';

export interface ModalProps extends Props {
  selectRef?: RefObject<HTMLInputElement> | null;
  closeRef?: RefObject<HTMLInputElement> | null;
  closeOnClick?: boolean;
  modalOpenOnload?: boolean;
  modalControl?: () => void;
  close?: boolean;
}

export interface HandleClickOutside extends ModalProps {
  ref: RefObject<HTMLInputElement>;
  onClickOutside: () => void;
}
