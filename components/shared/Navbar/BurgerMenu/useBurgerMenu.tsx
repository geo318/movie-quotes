import { Aside, Burger, Divider, Lang, Logout } from 'components';

export const useBurgerMenu = () => {
  const menu = <Burger />;
  const aside = (
    <div className='fixed top-0 left-0 m-0 z-50 bg-app-black-dark p-11 h-[70vh] w-[85vw] max-w-sm rounded-br-xl rounded-tr-xl'>
      <Aside />
      <Divider className='mt-12 mb-5' />
      <div className='flex flex-col'>
        <Lang aside className='w-28 items-start justify-center' />
        <Logout className='w-28 mt-5' />
      </div>
    </div>
  );
  return { menu, aside };
};
