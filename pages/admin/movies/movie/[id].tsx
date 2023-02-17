import {
  AddButton,
  NewQuote,
  AdminLayout,
  ModalLoadingOverlay,
  MovieQuote,
  Plus,
  Description,
  EditMovieLabel,
  NewMovie,
  Divider,
} from 'components';
import { getImage, loadText } from 'helpers';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import { checkUser } from 'services';
import { useMovie } from './useMovie';

const Post = () => {
  const { movie, isLoading, lang, id, refetch, isActive } = useMovie();
  return (
    <AdminLayout movies={false}>
      {isActive('edit-movie') && <NewMovie movie={movie} refetch={refetch} />}
      <h2 className='text-2xl'>Movie description</h2>
      <div className='grid xl:grid-cols-9 gird-cols-5 mt-8 gap-5'>
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
        <div className='xl:col-span-4 col-span-5'>
          <div className='flex flex-col lg:flex-row justify-center gap-5 xl:items-center'>
            <h1 className='text-2xl text-app-yellow line-clamp-1 mr-auto'>
              {loadText(
                `${movie?.movie_title[lang]} (${movie?.year})`,
                !isLoading
              )}
            </h1>
            <EditMovieLabel />
          </div>
          <div className='flex flex-col gap-5'>
            <Description movie={movie} lang={lang} isLoading={isLoading} />
          </div>
        </div>
        <div className='col-span-5 xl:mt-6 mt-5'>
          <div className='flex gap-0 xl:gap-4 items-center'>
            <div className='text-2xl hidden xl:flex'>
              Quotes {`(total ${movie?.quotes.length})`}
            </div>
            <div className='w-0 border-r border-app-dark-gray my-1' />
            <AddButton text='Add quote' icon={<Plus />} prop={id}>
              <NewQuote refetch={refetch} movie={movie} />
            </AddButton>
          </div>
          <Divider className='my-10 flex xl:hidden' />
          <div className='text-2xl xl:hidden'>
            All Quotes
            <p className='text-base'>{`(total ${movie?.quotes.length})`}</p>
          </div>
          <div className='xl:mt-14 mt-9 pb-36 gap-10 flex flex-col xl:mx-0 -mx-[2.1875rem]'>
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
}) => {
  try {
    const cookies = req.headers.cookie;
    await checkUser({ cookies });
  } catch {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

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
