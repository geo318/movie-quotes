import { LayoutProps } from './types';

const Layout = ({
  children,
  padding = true,
  background = true,
  className = 'flex-col',
}: LayoutProps) => (
  <div
    className={`flex flex-col text-white ${
      background ? 'bg-app-gradient' : ''
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
