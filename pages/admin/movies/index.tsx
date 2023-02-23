import {
  AdminLayout,
  AddButton,
  Search,
  ModalLoadingOverlay,
  Figure,
  Quote,
  Pen,
  NewMovie,
} from 'components';
import { getImage } from 'helpers';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import Link from 'next/link';
import { checkLoggedIn } from 'services';
import { Movie } from 'types';
import { useMovies } from 'hooks';

const Movies = () => {
  const { lang, t, handleSearch, search, movieData, isLoading, ref, refetch } =
    useMovies();
  return (
    <AdminLayout movies>
      <div className='flex items-center'>
        <h1 className='sm:text-2xl text-xl sm:line-clamp-none line-clamp-1'>
          {t('myMovieList')}
          <span className='ml-1 xl:inline-flex hidden'>{`(${t('total')} ${
            movieData?.length ? movieData?.length : ''
          })`}</span>
        </h1>
        <div
          onClick={handleSearch}
          ref={ref}
          className={`${
            search ? 'lg:w-[25rem]' : 'lg:w-32'
          } transition-all ml-auto mr-8`}
        >
          <Search
            className={`min-w-full hidden xl:block ${
              search && 'shadow-bottom'
            }`}
            full
            movies
          />
        </div>
        <AddButton text={t('addMovie')} icon={<Pen />}>
          <NewMovie refetch={refetch} />
        </AddButton>
      </div>
      <span className='xl:hidden block text-base'>{`  (Total ${
        movieData?.length ? movieData?.length : ''
      })`}</span>
      <div className='grid xl:grid-cols-3 grid-cols-1 gap-12 mt-14 pb-14'>
        {!isLoading ? (
          movieData?.length ? (
            movieData?.map((m: Movie, i: number) => (
              <Link href={`movies/movie/${m.id}`} key={m.id}>
                <div>
                  <div className='relative max-w-full w-full aspect-6/5 rounded-ten overflow-hidden'>
                    <Image
                      src={
                        m.movie_image.length > 200
                          ? m.movie_image
                          : getImage(m.movie_image)
                      }
                      alt={m.movie_title?.[lang] || 'movie_image'}
                      fill
                      sizes='(max-width: 500px) 50vw, 90vw'
                      className='min-w-full h-full object-cover'
                      priority={i < 6 ? true : false}
                    />
                  </div>
                  <p className='text-2xl my-4 uppercase line-clamp-1'>
                    {`${m.movie_title?.[lang]} (${m.year})`}
                  </p>
                  <Figure count={m.quotes?.length || 0}>
                    <Quote />
                  </Figure>
                </div>
              </Link>
            ))
          ) : (
            <p>{t('noMovies')}</p>
          )
        ) : (
          <ModalLoadingOverlay />
        )}
      </div>
    </AdminLayout>
  );
};
export default Movies;

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  req,
}) => {
  try {
    const cookies = req.headers.cookie;
    await checkLoggedIn({ cookies });
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
      destination: '/admin/movies',
      ...translation,
    },
  };
};
