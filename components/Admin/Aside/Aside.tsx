import { Avatar, HomeIcon, MovieIcon } from 'components';
import { getImage } from 'helpers';
import Link from 'next/link';
import { FC } from 'react';
import { Props } from 'types';
import { AsideItem } from './AsideItem';
import { useAside } from './useAside';

const Aside: FC<Props> = ({ className = '' }) => {
  const { nav, path, user, t } = useAside();
  return (
    <div className={`flex flex-col gap-10 ${className}`}>
      <Link href='/admin/profile'>
        <Avatar
          className='lg:w-[3.75rem] lg:h-[3.75rem] w-10 h-10'
          img={
            user?.avatar?.includes('google')
              ? user?.avatar
              : getImage(user?.avatar)
          }
          text={user?.username}
          subText={t('editProfile') as string}
          active={nav.profile === path}
          size={60}
          loading={!user?.id}
        />
      </Link>
      <Link href='/admin'>
        <AsideItem text={t('newsFeed')}>
          <HomeIcon active={nav.feed === path} className='lg:w-auto w-6' />
        </AsideItem>
      </Link>
      <Link href='/admin/movies'>
        <AsideItem text={t('listOfMovies')}>
          <MovieIcon active={nav.movies === path} className='lg:w-auto w-5' />
        </AsideItem>
      </Link>
    </div>
  );
};

export default Aside;
