import { Props } from 'types';

export interface AvatarProps extends Props {
  img: string;
  details?: boolean;
  text?: string;
  subText: string;
  size: number;
  active: boolean;
}
