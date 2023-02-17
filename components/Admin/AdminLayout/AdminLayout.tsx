import { Aside, Auth, Layout, Navbar } from 'components';
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
          <Navbar admin={movies} movies />
        </Layout>
        <Layout
          background={false}
          className={`mx-auto w-full text-white max-w-[120rem] flex-col min-h-screen mt-8 grid xl:grid-cols-4 grid-cols-5 ${
            isMobile ? '' : 'gap-10'
          } xl:gap-0`}
        >
          {!isMobile && (
            <div className='xl:col-span-1 col-span-2 w-full'>
              <Aside className='fixed top-32' />
            </div>
          )}
          <div className={isMobile ? 'col-span-5' : 'col-span-3'}>
            {children}
          </div>
        </Layout>
      </Layout>
    </>
  );
};

export default AdminLayout;
