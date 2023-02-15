import { Select } from 'components';
import { useMultipleSelect } from './useMultipleSelect';

const MultipleSelect = () => {
  const { select, dropdown } = useMultipleSelect();
  return (
    <Select face={select} closeOnClick={false}>
      {dropdown}
    </Select>
  );
};

export default MultipleSelect;
