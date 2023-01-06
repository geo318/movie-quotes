import { Layout, Button, Lang, Register } from 'components';
import { Login } from 'components/Auth/Login';
import Link from 'next/link';
import { useNavbar } from './useNavbar';

const Navbar = () => {
  const { t, openRegister, isRegisterModalOpen, isLoginModalOpen, router } =
    useNavbar();
  return (
    <div className='py-6 relative top-0 w-full backdrop-blur-xl'>
      {router.query.hasOwnProperty('register') && <Register />}
      {router.query.hasOwnProperty('login') && <Login />}
      <Layout background={false} className='flex-row w-full items-center'>
        <div className='uppercase text-app-yellow text-base leading-6 font-medium'>
          Movie Quotes
        </div>
        <nav className='flex ml-auto gap-5 items-center'>
          <Lang />
          <Link href='/?register' as='/register'>
            <Button
              text={t('signUp')}
              style='buttonRed'
              className='text-base hidden lg:block'
            />
          </Link>

          <Link href='/?login' as='/login'>
            <Button text={t('login')} className='text-base px-6' />
          </Link>
        </nav>
      </Layout>
    </div>
  );
};

export default Navbar;
