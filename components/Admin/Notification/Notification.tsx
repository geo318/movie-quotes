import { Select } from 'components';
import { useNotification } from './useNotification';

const Notification = () => {
  const { selector, dropdown } = useNotification();
  return (
    <div>
      <Select
        face={selector}
        closeOnClick={false}
        className='mr-5'
        modalClassName='absolute bg-black py-3 rounded-xl mt-7 right-0 lg:w-[58rem]'
      >
        {dropdown}
      </Select>
    </div>
  );
};

export default Notification;
