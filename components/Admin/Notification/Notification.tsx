import { Select } from 'components';
import { useNotification } from './useNotification';

const Notification = () => {
  const { selector, dropdown } = useNotification();
  return (
    <div>
      <Select
        face={selector}
        closeOnClick={false}
        className='xl:mr-5'
        modalClassName='bg-black py-3 rounded-xl lg:mt-7 mt-6 xl:absolute fixed left-0 right-0 xl:left-auto xl:w-[58rem]'
      >
        {dropdown}
      </Select>
    </div>
  );
};

export default Notification;
