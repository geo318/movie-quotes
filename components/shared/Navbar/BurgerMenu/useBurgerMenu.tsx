import { Aside } from 'components/Admin';
import { Burger } from 'components/icons';

export const useBurgerMenu = () => {
  const menu = <Burger />;
  const aside = (
    <div className='fixed top-0 left-0 m-0 z-50 bg-app-black-dark p-11 h-[70vh] w-[85vw] max-w-sm rounded-br-xl rounded-tr-xl'>
      <Aside />
    </div>
  );
  return { menu, aside };
};
