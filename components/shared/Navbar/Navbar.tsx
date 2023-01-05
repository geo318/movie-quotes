import { Layout, Button, Lang, Register } from 'components';
import { useNavbar } from './useNavbar';

const Navbar = () => {
  const { t, openRegister, isRegisterModalOpen, isLoginModalOpen } =
    useNavbar();

  return (
    <div className='py-6 relative top-0 w-full backdrop-blur-xl'>
      {isRegisterModalOpen && <Register />}
      <Layout background={false} className='flex-row w-full items-center'>
        <div className='uppercase text-app-yellow text-base leading-6 font-medium'>
          Movie Quotes
        </div>
        <nav className='flex ml-auto gap-5 items-center'>
          <Lang />
          <Button
            text={t('signUp')}
            style='buttonRed'
            className='text-base hidden lg:block'
            onClick={openRegister}
          />
          <Button text={t('login')} className='text-base px-6' />
        </nav>
      </Layout>
    </div>
  );
};

export default Navbar;
