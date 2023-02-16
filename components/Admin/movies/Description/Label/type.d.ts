import { LegacyRef } from 'react';
import { Genre, Props } from 'types';

export type LabelProps = Props & {
  genres: Genre[];
  modal?: boolean;
  labelRef?: LegacyRef<HTMLDivElement>;
  cb?: (genre: Genre, id: number) => void;
};
