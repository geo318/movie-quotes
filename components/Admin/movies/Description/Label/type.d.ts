import { Props } from 'types';

export type LabelProps = Props & {
  genres: Genre[];
  modal?: boolean;
  cb?: (id: number) => void;
};
