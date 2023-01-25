import { Aside, Auth, Layout, Navbar } from 'components';
import Head from 'next/head';
import { FC } from 'react';
import { Props } from 'types';

const AdminLayout: FC<Props> = ({ children, className = '' }) => {
  return (
    <>
      <Head>
        <title>Epic Movie Quotes</title>
        <meta name='description' content='Add favorite quotes and share' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico?v=1.0' />
      </Head>
      <Layout padding={false} className={`h-full flex flex-col ${className}`}>
        <Layout background={false} padding={false} admin>
          <Navbar admin>
            <Auth />
          </Navbar>
        </Layout>
        <Layout
          background={false}
          className='text-white flex-col min-h-screen mt-8 grid grid-cols-4'
        >
          <div className='col-span-1 w-full'>
            <Aside className='fixed top-32' />
          </div>
          <div className='col-span-3'>{children}</div>
        </Layout>
      </Layout>
    </>
  );
};

export default AdminLayout;
