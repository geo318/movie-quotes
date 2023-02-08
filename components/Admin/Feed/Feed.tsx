import { FC, LegacyRef, RefObject, useEffect } from 'react';
import {
  Avatar,
  ChatIcon,
  Comment,
  Divider,
  HeartIcon,
  Figure,
  AddComment,
  Search,
  AddQuote,
} from 'components';
import { FeedData, FeedProps } from './types';
import Image from 'next/image';
import { getImage } from 'helpers';
import { useFeed } from './useFeed';
import { Like } from 'types';

const Feed: FC<FeedProps> = ({ data, nextPage, loading }) => {
  const {
    authUser,
    lastFeedElementRef,
    handleLike,
    ref,
    search,
    handleSearch,
  } = useFeed({
    nextPage,
    loading,
  });

  return (
    <div className='grid grid-cols-3 min-h-full gap-10 pb-28'>
      <div className='col-span-2 gap-10 grid grid-cols-3 text-xl -mb-4'>
        <div className='col-span-3'>
          <AddQuote
            className={`${
              search ? 'w-[30%]' : 'w-[82%]'
            } inline-block transition-all`}
          />
          <div
            onClick={handleSearch}
            ref={ref}
            className={`${
              search ? 'w-[70%]' : 'w-[18%]'
            } inline-block float-right transition-all`}
          >
            <Search className='w-full' active={search} />
          </div>
        </div>
      </div>
      {data?.map((item: FeedData, index: number) => (
        <div
          key={item.id}
          className='col-span-2 rounded-xl bg-app-black-dark px-6 pt-6 pb-10'
          ref={lastFeedElementRef as LegacyRef<HTMLDivElement> | undefined}
        >
          <Avatar
            text={item.user.username}
            img={getImage(item.user.avatar)}
            size={52}
            loading={false}
          />
          <p className='text-xl leading-7 font-normal mt-4 mb-7'>
            <span className='mr-2'>&ldquo;{item.quote_title}&rdquo;</span>
            <span className='font-medium text-app-yellow mr-2'>
              {item.movie.movie_title}
            </span>
            <span>{`(${item.movie.year})`}</span>
          </p>
          <div className='relative h-[31rem] rounded-[.625rem] overflow-hidden'>
            <Image
              src={getImage(item.quote_image)}
              alt={item.quote_title}
              fill
              sizes='(max-width: 700px) 50vw, 90vw'
              className='min-w-full h-full object-cover'
              priority={index < 2 ? true : false}
            />
          </div>
          <div className='flex gap-8 mt-6 mb-5'>
            <Figure count={item.comments.length} className='gap-4'>
              <ChatIcon />
            </Figure>
            <Figure count={item.likes.length}>
              <div
                onClick={() =>
                  handleLike({ userId: authUser.id, quoteId: item.id })
                }
                className='cursor-pointer'
              >
                {item.likes.some((e: Like) => e.user_id === authUser.id) ? (
                  <HeartIcon active />
                ) : (
                  <HeartIcon />
                )}
              </div>
            </Figure>
          </div>
          <Divider />
          <Comment data={item.comments.slice().reverse()} />
          <div className='flex mt-6'>
            <Avatar
              className='h-[3.25rem] w-[3.25rem]'
              img={getImage(authUser?.avatar)}
              size={52}
              loading={!authUser?.avatar}
            />
            <AddComment quoteId={item.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
