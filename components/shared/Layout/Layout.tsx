import { FC } from 'react';

import { LayoutProps } from './types';

const Layout: FC<LayoutProps> = ({
  children,
  padding = true,
  background = true,
  className = 'flex-col',
  dark = false,
}) => (
  <div
    className={`flex flex-col text-white ${
      background ? `${dark ? 'bg-app-gradient-dark' : 'bg-app-gradient'}` : ''
    }`}
  >
    <div
      className={`${
        padding ? 'px-9 lg:px-[4.4rem]' : ''
      } flex text-white ${className}`}
    >
      {children}
    </div>
  </div>
);

export default Layout;
