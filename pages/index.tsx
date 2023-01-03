import Head from 'next/head';
import Image from 'next/image';
import { Layout, Navbar, Button, Slides, Footer } from 'components';
import { SlidePart } from 'public';

const Home = () => (
  <>
    <Head>
      <title>Epic Movie Quotes</title>
      <meta name='description' content='Add favorite quotes and share' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Layout padding={false}>
      <Navbar />
      <div className='text-white h-screen flex flex-col'>
        <div className='my-auto flex justify-center'>
          <div className='flex flex-col justify-center'>
            <p className='text-app-yellow font-bold text-6xl leading-normal max-w-2xl text-center'>
              Find any quote in millions of movie lines
            </p>
            <Button
              text='Get started'
              className='mx-auto mt-7'
              style='buttonRed'
            />
          </div>
        </div>
        <Image src={SlidePart} alt='' />
      </div>
      <Slides />
      <Footer />
    </Layout>
  </>
);

export default Home;
