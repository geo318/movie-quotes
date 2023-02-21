import { Aside, Layout, Navbar } from 'components';
import Head from 'next/head';
import { FC } from 'react';
import { Props } from 'types';
import { useAdminLayout } from './useAdminLayout';

const AdminLayout: FC<Props & { movies?: boolean }> = ({
  children,
  className = '',
  movies,
}) => {
  const { isMobile } = useAdminLayout();

  return (
    <>
      <Head>
        <title>{`Epic Movie Quotes ${
          movies != undefined && '- search movies'
        }`}</title>
        <meta
          name='description'
          content={`${
            movies != undefined
              ? 'Add favorite movies with favorite quotes'
              : 'Add favorite quotes and share'
          }`}
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico?v=1.0' />
      </Head>
      <Layout padding={false} className={`h-full flex flex-col ${className}`}>
        <Layout background={false} padding={false} admin>
          <Navbar admin movies={movies} />
        </Layout>
        <Layout
          background={false}
          className={`mx-auto w-full text-white max-w-[130rem] flex-col min-h-screen mt-8 grid lg:grid-cols-4 grid-cols-12 ${
            isMobile ? '' : 'gap-10'
          } xl:gap-0`}
        >
          {!isMobile && (
            <div className='lg:col-span-1 col-span-1 w-full lg:block hidden'>
              <Aside className='fixed top-32' />
            </div>
          )}
          <div className='col-span-12 lg:col-span-3'>{children}</div>
        </Layout>
      </Layout>
    </>
  );
};

export default AdminLayout;
