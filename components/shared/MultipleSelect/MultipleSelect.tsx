import { Select } from 'components';
import { FC } from 'react';
import { Genre } from 'types';
import { useMultipleSelect } from './useMultipleSelect';

const MultipleSelect: FC<{ genres: Genre[] }> = ({ genres }) => {
  const { labelClicked, select, dropdown } = useMultipleSelect(genres);
  return (
    <Select face={select} closeOnClick={false} intercept={labelClicked}>
      {dropdown}
    </Select>
  );
};

export default MultipleSelect;
