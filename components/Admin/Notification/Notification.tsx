import {
  Dropdown,
  ReadQuote,
  Select,
  Selector,
  useNotification,
} from 'components';

const Notification = () => {
  const { openModal, id, markAsReadHandler, isActive, setOpenModal } =
    useNotification();
  return (
    <div>
      {isActive('read-quote') && <ReadQuote id={id} />}
      <Select
        clearDropdown={openModal}
        face={<Selector />}
        closeOnClick={false}
        className='xl:mr-5'
        modalClassName='bg-black py-3 rounded-xl lg:mt-7 mt-6 xl:absolute fixed left-0 right-0 xl:left-auto xl:w-[58rem]'
      >
        <Dropdown markAsReadHandler={markAsReadHandler} />
      </Select>
    </div>
  );
};
export default Notification;
