import { Props } from 'types';

export interface AddButton extends Props {
  text: string;
  icon?: JSX.Element;
  prop?: string | string[];
  face?: JSX.Element;
}
