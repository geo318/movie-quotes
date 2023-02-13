import { Auth, Button, Footer, Layout, Navbar, Slides } from 'components';
import { useHome } from 'hooks';
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { checkUser } from 'services';

const Home: NextPage = () => {
  const { t } = useHome();
  return (
    <>
      <Head>
        <title>Epic Movie Quotes</title>
        <meta name='description' content='Add favorite quotes and share' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico?v=1.0' />
      </Head>
      <Layout padding={false} dark>
        <Layout background={false} padding={false}>
          <Navbar>
            <Auth />
          </Navbar>
        </Layout>
        <>
          <div className='text-white md:h-[90vh] h-[25rem] flex flex-col'>
            <div className='my-auto flex justify-center'>
              <div className='flex flex-col justify-center'>
                <p className='text-app-yellow font-bold text-2xl leading-9 lg:text-6xl lg:leading-normal max-w-[16rem] lg:max-w-2xl text-center'>
                  {t('welcome')}
                </p>
                <Link href='/?register' as='/register' className='mx-auto mt-7'>
                  <Button
                    text={t('getStarted')}
                    style='buttonRed'
                    className='lg:text-xl lg:leading-normal'
                  />
                </Link>
              </div>
            </div>
          </div>
          <main>
            <Slides />
          </main>
        </>
        <Footer />
      </Layout>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const lang = context.locale;

  try {
    const cookies = context.req.headers.cookie;
    await checkUser({ cookies });

    context.res.setHeader('set-cookie', ['access-token=1']);
    return {
      redirect: {
        destination: `/${lang}/admin`,
        permanent: false,
      },
    };
  } catch {}

  const url = context.req.url;
  const translation = await serverSideTranslations(context.locale as string, [
    'shared',
    'home',
  ]);

  const preventRedirectQueryList = [
    '/',
    '.json',
    'confirm-email',
    'reset-password',
  ];

  if (preventRedirectQueryList.some((query) => url!.includes(query)))
    return {
      props: {
        ...translation,
      },
    };

  context.res.writeHead(302, { Location: `/${lang}` });
  context.res.end();
  return {
    props: {
      ...translation,
    },
  };
};
