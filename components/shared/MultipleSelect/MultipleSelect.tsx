import { Select } from 'components';
import { useMultipleSelect } from './useMultipleSelect';

const MultipleSelect = () => {
  const { labelClicked, select, dropdown } = useMultipleSelect();
  return (
    <Select face={select} closeOnClick={false} intercept={labelClicked}>
      {dropdown}
    </Select>
  );
};

export default MultipleSelect;
