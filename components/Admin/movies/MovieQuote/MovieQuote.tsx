import {
  ChatIcon,
  HeartIcon,
  ModalLoadingOverlay,
  Divider,
  Figure,
  QuoteMenu,
  ViewQuote,
} from 'components';
import { getImage } from 'helpers';
import { useActiveQuery } from 'hooks';
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
  const { handleDelete } = useMovieQuote(refetch);
  const { isActive } = useActiveQuery();
  return (
    <>
      {isActive('view-quote') && <ViewQuote refetch={refetch} />}
      {quotes?.map((q) => (
        <div key={q.id}>
          <div className='col-span-5 bg-app-black-dark py-6 px-8 rounded-ten relative'>
            <div className='absolute right-8'>
              <QuoteMenu quote={q} id={id} handleDelete={handleDelete} />
            </div>
            <div className='flex gap-8 items-center'>
              <div className='relative max-w-[14rem] w-full aspect-3/2 rounded-sm overflow-hidden'>
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
                <ChatIcon className='w-6 lg:w-auto' />
              </Figure>
              <Figure count={q.likes.length}>
                <HeartIcon className='w-6 lg:w-auto' />
              </Figure>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieQuote;
