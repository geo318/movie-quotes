import { Select } from 'components';
import { useNotification } from './useNotification';

const Notification = () => {
  const { selector, dropdown } = useNotification();
  return (
    <div>
      <Select
        face={selector}
        className='mr-5'
        modalClassName='absolute bg-black py-3 rounded-md mt-7 -ml-10 w-32'
      >
        {dropdown}
      </Select>
    </div>
  );
};

export default Notification;
