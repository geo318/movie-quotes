import { Props } from 'types';

export interface InputProps extends Props {
  name: string;
  onChange?: React.FormEvent<HTMLInputElement>;
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string | number;
  validation?: {
    [key: string]:
      | {
          [key: string]: string | number | boolean | RegExp;
        }
      | number;
  };
}
