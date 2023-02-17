import {
  ChatIcon,
  HeartIcon,
  ModalLoadingOverlay,
  Divider,
  Figure,
  QuoteMenu,
  ViewQuote,
  EditQuote,
} from 'components';
import { getImage } from 'helpers';
import Image from 'next/image';
import { FC } from 'react';
import { MovieQuoteProps } from './type';
import { useMovieQuote } from './useMovieQuote';

const MovieQuote: FC<MovieQuoteProps> = ({
  quotes,
  isLoading,
  lang,
  id,
  refetch,
}) => {
  const { handleDelete, isActive } = useMovieQuote(refetch);

  return (
    <>
      {isActive('view-quote') && (
        <ViewQuote refetch={refetch} quotes={quotes} />
      )}
      {isActive('edit-quote') && (
        <EditQuote refetch={refetch} quotes={quotes} />
      )}
      {quotes?.map((q) => (
        <div key={q.id}>
          <div className='col-span-5 bg-app-black-dark py-6 px-8 rounded-ten relative'>
            <div className='absolute right-8 hidden xl:block'>
              <QuoteMenu quote={q} id={id} handleDelete={handleDelete} />
            </div>
            <div className='flex flex-col xl:flex-row gap-8 xl:items-center items-start'>
              <div className='relative xl:max-w-[14rem] w-full xl:aspect-3/2 aspect-5/2 rounded-sm overflow-hidden'>
                {!isLoading ? (
                  <Image
                    src={getImage(q.quote_image)}
                    alt={q.quote_title?.en || 'movie_image'}
                    fill
                    sizes='(max-width: 500px) 50vw, 90vw'
                    className='min-w-full h-full object-cover'
                    priority
                  />
                ) : (
                  <ModalLoadingOverlay />
                )}
              </div>
              <p className='text-2xl'>&ldquo;{q.quote_title[lang]}&rdquo;</p>
            </div>

            <Divider className='my-6' />
            <div className='flex gap-8 mt-6'>
              <Figure count={q.comments.length} className='gap-4'>
                <ChatIcon className='w-6 xl:w-auto' />
              </Figure>
              <Figure count={q.likes.length}>
                <HeartIcon className='w-6 xl:w-auto' />
              </Figure>
              <div className='ml-auto xl:hidden'>
                <QuoteMenu quote={q} id={id} handleDelete={handleDelete} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieQuote;
