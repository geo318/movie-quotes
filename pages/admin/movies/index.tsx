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
import { Movie } from 'types';
import { useMovies } from './useMovies';

const Movies = () => {
  const { lang, handleSearch, search, movieData, isLoading, ref } = useMovies();
  return (
    <AdminLayout>
      <div className='flex items-center'>
        <h1 className='text-2xl'>
          My list of movies
          {`  (Total ${movieData?.length ? movieData?.length : ''})`}
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
          />
        </div>
        <AddButton text='add-movie' icon={<Pen />}>
          <NewMovie />
        </AddButton>
      </div>
      <div className='grid grid-cols-3 gap-12 mt-14 pb-14'>
        {!isLoading ? (
          movieData?.length ? (
            movieData?.map((m: Movie, i: number) => (
              <Link href={`movies/movie/${m.id}`} key={m.id}>
                <div>
                  <div className='relative max-w-full w-full aspect-6/5 rounded-ten overflow-hidden'>
                    <Image
                      src={
                        m.movie_image
                          ? m.movie_image.length > 200
                            ? m.movie_image
                            : getImage(m.movie_image)
                          : getImage(`/storage/quotes/1ddtvH.jpg?n=${i}`)
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
            <p>No movies added yet...</p>
          )
        ) : (
          <ModalLoadingOverlay />
        )}
      </div>
    </AdminLayout>
  );
};
export default Movies;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
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
