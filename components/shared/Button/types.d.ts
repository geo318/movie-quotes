import { Props } from 'types';

export interface ButtonProps extends Props {
  text: string;
  className?: string;
  style?: 'buttonRed';
  onClick?: () => void;
  disabled?: boolean;
  typeButton?: boolean;
}
