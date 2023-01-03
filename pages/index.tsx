import Head from 'next/head';
import Image from 'next/image';
import { Layout, Navbar, Button } from 'Components';
import { useQuotes, getStaticProps } from 'hooks';

getStaticProps();
const Home = () => {
  const { quotes, isLoading, isError } = useQuotes();
  return (
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
          <div className='h-52' />
        </div>
        <main className=''>
          {isLoading ? (
            <div>...loading</div>
          ) : isError ? (
            <div>...error</div>
          ) : (
            quotes.map((q: { [key: string]: string }, index: number) => {
              const src = `${process.env.BASE_URL}${q.quote_image}`;
              return (
                <article
                  key={q.id}
                  className={`sticky top-0 h-screen flex justify-center items-center ${
                    index === 0 && 'mt-[-200px]'
                  }`}
                >
                  <Image
                    sizes='(max-width: 2000) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw'
                    src={src}
                    alt={q.title}
                    fill
                    className='object-cover -z-10'
                    {...(index === 0 ? { priority: true } : {})}
                  />
                  <div className='grid grid-cols-12 text-left w-full'>
                    <div className='col-span-1 col-start-2 flex justify-end'>
                      <div className='border-t-2 border-white mt-8 w-12 mr-5' />
                    </div>
                    <p className='text-5xl font-bold leading-normal col-span-7 col-start-3'>
                      {q.quote_title}
                    </p>
                  </div>
                </article>
              );
            })
          )}
        </main>
        <Layout padding={false}>
          <div className='flex items-center h-12 text-[#DDCCAA] bg-gradient-to-b from-[#181623] via-[#191725] to-[#0D0B14]'>
            © 2022 movie quotes. All rights reserved.
          </div>
        </Layout>
      </Layout>
    </>
  );
};

export default Home;
