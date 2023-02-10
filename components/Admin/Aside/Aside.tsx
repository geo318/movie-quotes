import { Avatar, HomeIcon, MovieIcon } from 'components';
import { getImage } from 'helpers';
import Link from 'next/link';
import { FC } from 'react';
import { Props } from 'types';
import { AsideItem } from './AsideItem';
import { useAside } from './useAside';

const Aside: FC<Props> = ({ className = '' }) => {
  const { nav, path, user } = useAside();
  return (
    <div className={`flex flex-col gap-10 ${className}`}>
      <Link href='/admin/profile'>
        <Avatar
          className='lg:w-[3.75rem] lg:h-[3.75rem] w-10 h-10'
          img={getImage(user?.avatar)}
          text='name surname'
          subText='Edit your profile'
          active={nav.profile === path}
          size={60}
          loading={!user?.id}
        />
      </Link>
      <Link href='/admin'>
        <AsideItem text='News feed'>
          <HomeIcon active={nav.feed === path} className="lg:w-auto w-6"/>
        </AsideItem>
      </Link>
      <Link href='/admin/movies'>
        <AsideItem text='List of movies'>
          <MovieIcon active={nav.movies === path} className="lg:w-auto w-5" />
        </AsideItem>
      </Link>
    </div>
  );
};

export default Aside;
