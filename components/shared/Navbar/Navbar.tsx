import {
  BurgerMenu,
  Button,
  Lang,
  Layout,
  Logout,
  Notification,
  SearchMenu,
} from 'components';
import Link from 'next/link';
import { FC } from 'react';
import { NavbarProps } from 'types';
import { useNavbar } from './useNavbar';

const Navbar: FC<NavbarProps> = ({ children, admin = false }) => {
  const { t, isMobile } = useNavbar();
  return (
    <div
      className={`py-6 relative top-0 w-full backdrop-blur-xl ${
        admin
          ? 'backdrop-blur-xl bg-white bg-opacity-5 fixed top-0 inset-x-0'
          : ''
      }`}
    >
      {children}
      <Layout background={false} className='flex-row w-full items-center'>
        {isMobile ? (
          <BurgerMenu />
        ) : (
          <div className='uppercase text-app-yellow text-base leading-6 font-medium'>
            Movie Quotes
          </div>
        )}
        <nav className='flex ml-auto sm:gap-5 items-center relative'>
          {admin && isMobile && (
            <>
              <SearchMenu />
              <div className='w-5 sm:hidden' />
            </>
          )}
          {admin && <Notification />}
          <Lang className='sm:block hidden' />
          {admin ? (
            <div className='sm:block hidden'>
              <Logout />
            </div>
          ) : (
            <>
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
            </>
          )}
        </nav>
      </Layout>
    </div>
  );
};

export default Navbar;
