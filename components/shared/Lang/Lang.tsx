import { Select, useLang } from 'components';
import { FC } from 'react';

const Lang: FC<{ className: string }> = ({ className = '' }) => {
  const { selector, dropdown } = useLang();
  return (
    <Select
      face={selector}
      className={`mr-5 ${className}`}
      modalClassName='absolute bg-white text-black py-3 rounded-md mt-4 -ml-5 w-32'
    >
      {dropdown}
    </Select>
  );
};

export default Lang;
