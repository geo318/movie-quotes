import { Dropdown, Select, Selector } from 'components';

const Notification = () => (
  <div>
    <Select
      face={<Selector />}
      closeOnClick={false}
      className='xl:mr-5'
      modalClassName='bg-black py-3 rounded-xl lg:mt-7 mt-6 xl:absolute fixed left-0 right-0 xl:left-auto xl:w-[58rem]'
    >
      <Dropdown />
    </Select>
  </div>
);
export default Notification;
