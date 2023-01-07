import { Props } from 'types';

export interface CheckProps extends Props {
  name: string;
  label?: string;
  validation?: {
    [key: string]: {
      [key: string]: string | number | boolean | RegExp;
    };
  };
}
