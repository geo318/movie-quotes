import {
  ChatIcon,
  Dots,
  HeartIcon,
  ModalLoadingOverlay,
  Select,
  Divider,
  Figure,
  Eye,
  Pen,
  Bin,
} from 'components';
import { getImage } from 'helpers';
import Image from 'next/image';
import Link from 'next/link';
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
  return (
    <>
      {quotes?.map((q) => (
        <div
          key={q.id}
          className='col-span-5 bg-app-black-dark py-6 px-8 rounded-ten relative'
        >
          <div className='absolute right-8'>
            <Select face={<Dots />}>
              <div className='absolute'>
                <ul className='flex flex-col gap-8 bg-[#24222F] px-10 py-8 rounded-ten lg:w-[15rem] text-base'>
                  <li>
                    <Link
                      href={`${id}?add-quote`}
                      className='flex items-center gap-4'
                    >
                      <Eye big />
                      View Quote
                    </Link>
                  </li>
                  <li className='flex items-center gap-4 cursor-pointer'>
                    <Pen />
                    Edit
                  </li>
                  <li
                    className='flex items-center gap-4 cursor-pointer'
                    onClick={() => handleDelete(q.id)}
                  >
                    <Bin />
                    Delete
                  </li>
                </ul>
              </div>
            </Select>
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
      ))}
    </>
  );
};

export default MovieQuote;
