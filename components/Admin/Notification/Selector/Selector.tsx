import { Bell, useNotification } from 'components';

const Selector = () => {
  const { num } = useNotification();
  return (
    <div className='cursor-pointer relative'>
      <Bell className='w-6 lg:w-auto' />
      {num > 0 && (
        <div className='absolute -top-2 -right-2 w-[1.56rem] h-[1.56rem] bg-[#E33812] rounded-full flex justify-center items-center text-base'>
          {num}
        </div>
      )}
    </div>
  );
};
export default Selector;
