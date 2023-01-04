import Head from 'next/head';
import { Layout, Navbar, Button, Slides, Footer } from 'components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { GetStaticProps } from 'next';

const Home = () => {
  const { t } = useTranslation('home');
  return (
    <>
      <Head>
        <title>Epic Movie Quotes</title>
        <meta name='description' content='Add favorite quotes and share' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout padding={false}>
        <Layout background={false} padding={false}>
          <Navbar />
        </Layout>
        <div className='text-white md:h-[90vh] h-[25rem] flex flex-col'>
          <div className='my-auto flex justify-center'>
            <div className='flex flex-col justify-center'>
              <p className='text-app-yellow font-bold text-2xl leading-9 lg:text-6xl lg:leading-normal max-w-[16rem] lg:max-w-2xl text-center'>
                Find any quote in millions of movie lines
                {t('msg')}
              </p>
              <Button
                text='Get started'
                className='mx-auto mt-7'
                style='buttonRed'
              />
            </div>
          </div>
        </div>
        <main>
          <Slides />
        </main>
        <Footer />
      </Layout>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['home'])),
    },
  };
};
