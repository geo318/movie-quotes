import { Avatar, HomeIcon, MovieIcon } from 'components';
import Link from 'next/link';
import { FC } from 'react';
import { Props } from 'types';
import { AsideItem } from './AsideItem';
import { useAside } from './useAside';

const Aside: FC<Props> = ({ className = '' }) => {
  const { nav, path } = useAside();
  return (
    <div className={`flex flex-col gap-10 ${className}`}>
      <Link href='/admin/profile'>
        <Avatar
          size={60}
          img=''
          text='name surname'
          subText='subtext'
          active={nav.profile === path}
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
