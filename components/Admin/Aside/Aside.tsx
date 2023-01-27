import { Avatar, HomeIcon, MovieIcon } from 'components';
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
          className='w-[3.75rem] h-[3.75rem]'
          img={`${process.env.NEXT_PUBLIC_BASE_URL}${user?.avatar}`}
          text='name surname'
          subText='Edit your profile'
          active={nav.profile === path}
          size={60}
          loading={!user?.id}
        />
      </Link>
      <Link href='/admin'>
        <AsideItem text='News feed'>
          <HomeIcon active={nav.feed === path} />
        </AsideItem>
      </Link>
      <Link href='/admin/movies'>
        <AsideItem text='List of movies'>
          <MovieIcon active={nav.movies === path} />
        </AsideItem>
      </Link>
    </div>
  );
};

export default Aside;
