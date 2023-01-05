import { Props } from 'types';

export interface SelectProps extends Props {
  name?: string;
  placeholder?: string;
  value?: string;
  modalClassName?: string;
  face?: React.ReactNode;
}
