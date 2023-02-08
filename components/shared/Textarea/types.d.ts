import { Props } from 'types';

export interface InputProps extends Props {
  name: string;
  label?: string;
  placeholder?: string;
  rows?: number;
  inputStyle?: string;
}
