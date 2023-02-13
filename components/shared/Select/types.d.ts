import { RefObject } from 'react';
import { Props } from 'types';

export interface SelectProps extends Props {
  name?: string;
  placeholder?: string;
  value?: string;
  modalClassName?: string;
  face?: React.ReactNode;
  closeOnClick?: boolean;
  closeRef?: RefObject<HTMLElement> | null;
}
