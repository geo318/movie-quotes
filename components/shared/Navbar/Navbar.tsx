import { Button, Lang, Layout } from 'components';
import Link from 'next/link';
import { FC } from 'react';
import { Props } from 'types';

import { useNavbar } from './useNavbar';

const Navbar: FC<Props> = ({ children }) => {
  const { t } = useNavbar();
  return (
    <div className='py-6 relative top-0 w-full backdrop-blur-xl'>
      {children}
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
