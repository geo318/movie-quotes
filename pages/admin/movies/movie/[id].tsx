import {
  AddButton,
  NewQuote,
  AdminLayout,
  Bin,
  ModalLoadingOverlay,
  MovieQuote,
  Pen,
  Plus,
  Description,
} from 'components';
import { getImage, loadText } from 'helpers';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import { useMovie } from './useMovie';

const Post = () => {
  const { movie, isLoading, lang, id, refetch } = useMovie();
  return (
    <AdminLayout>
      <h2 className='text-2xl'>Movie description</h2>
      <div className='grid grid-cols-9 mt-8 gap-5'>
        <div className='col-span-5 relative max-w-full w-full aspect-9/5 rounded-ten overflow-hidden'>
          {!isLoading ? (
            <Image
              src={getImage(movie?.movie_image)}
              alt={movie?.movie_title?.en || 'movie_image'}
              fill
              sizes='(max-width: 500px) 50vw, 90vw'
              className='min-w-full h-full object-cover'
              priority
            />
          ) : (
            <ModalLoadingOverlay />
          )}
        </div>
        <div className='col-span-4'>
          <div className='flex items-center'>
            <h1 className='text-2xl text-app-yellow line-clamp-1'>
              {loadText(
                `${movie?.movie_title[lang]} (${movie?.year})`,
                !isLoading
              )}
            </h1>
            <div className='flex bg-[#24222F] bg-opacity-40 rounded-lg p-[0.125rem] ml-2'>
              <div className='px-6 py-3'>
                <Pen />
              </div>
              <div className='w-0 border-r border-app-dark-gray my-3' />
              <div className='px-6 py-3'>
                <Bin />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <Description movie={movie} lang={lang} isLoading={isLoading} />
          </div>
        </div>
        <div className='col-span-5 mt-6'>
          <div className='flex gap-4 items-center'>
            <div className='text-2xl'>
              Quotes {`(total ${movie?.quotes.length})`}
            </div>
            <div className='w-0 border-r border-app-dark-gray my-1' />
            <AddButton text='Add quote' icon={<Plus />} prop={id}>
              <NewQuote refetch={refetch} movie={movie} />
            </AddButton>
          </div>
          <div className='mt-14 pb-36 gap-10 flex flex-col'>
            <MovieQuote
              refetch={refetch}
              quotes={movie?.quotes}
              isLoading={isLoading}
              lang={lang}
              id={id}
            />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Post;

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  req,
  res,
}) => {
  const translation = await serverSideTranslations(locale as string, [
    'shared',
    'home',
  ]);

  return {
    props: {
      ...translation,
    },
  };
};
