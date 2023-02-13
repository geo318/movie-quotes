import { FC, LegacyRef } from 'react';
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
import { FeedProps } from './types';
import Image from 'next/image';
import { getImage } from 'helpers';
import { useFeed } from './useFeed';
import { Like, FeedData } from 'types';

const Feed: FC<FeedProps> = ({ data, nextPage, loading }) => {
  const {
    authUser,
    lastFeedElementRef,
    handleLike,
    ref,
    search,
    handleSearch,
    lang,
    t,
  } = useFeed({
    nextPage,
    loading,
  });

  return (
    <div
      className={`grid xl:grid-cols-3 grid-cols-2 min-h-full xl:gap-10 pb-28 lg:text-xl text-base ${
        !data?.length ? '!flex flex-col' : ''
      }`}
    >
      <div className='xl:col-span-2 col-span-3 gap-10 grid grid-cols-3 -mb-4'>
        <div className='col-span-3'>
          <AddQuote
            className={`${
              search ? 'xl:w-[32%]' : 'xl:w-[82%]'
            } inline-block transition-all xl:mb-0 mb-10`}
          />
          <div
            onClick={handleSearch}
            ref={ref}
            className={`${
              search ? 'lg:w-[68%]' : 'lg:w-[18%]'
            } inline-block float-right transition-all`}
          >
            <Search className='w-full hidden xl:block' active={search} />
          </div>
        </div>
      </div>
      {data?.length ? (
        data?.map((item: FeedData, index: number) => (
          <div
            key={item.id}
            className='col-span-2 rounded-xl bg-app-black-dark xl:px-6 px-9 pt-6 lg:pb-10 pb-4 mb-8 xl:m-0 -mx-8 '
            ref={lastFeedElementRef as LegacyRef<HTMLDivElement> | undefined}
          >
            <Avatar
              text={item.user.username}
              img={getImage(item.user.avatar)}
              className='lg:h-[3.25rem] lg:w-[3.25rem] w-10 h-10'
              size={52}
              loading={false}
            />
            <p className='xl:text-xl xl:leading-7 font-normal mt-4 mb-7'>
              <span className='mr-2'>
                &ldquo;{item.quote_title?.[lang]}&rdquo;
              </span>
              <span className='font-medium text-app-yellow mr-2'>
                {item.movie.movie_title?.[lang]}
              </span>
              <span>{`(${item.movie.year})`}</span>
            </p>
            <div className='relative lg:h-[31rem] max-w-full w-full aspect-9/5 rounded-[.625rem] overflow-hidden'>
              <Image
                src={
                  item.quote_image.length > 200
                    ? item.quote_image
                    : getImage(item.quote_image)
                }
                alt={item.quote_title?.[lang]}
                fill
                sizes='(max-width: 700px) 50vw, 90vw'
                className='min-w-full h-full object-cover'
                priority={index < 2 ? true : false}
              />
            </div>
            <div className='flex gap-8 mt-6 mb-5'>
              <Figure count={item.comments.length} className='gap-4'>
                <ChatIcon className='w-6 lg:w-auto' />
              </Figure>
              <Figure count={item.likes.length}>
                <div
                  onClick={() =>
                    handleLike({ userId: authUser.id, quoteId: item.id })
                  }
                  className='cursor-pointer'
                >
                  {item.likes.some((e: Like) => e.user_id === authUser?.id) ? (
                    <HeartIcon active className='w-6 lg:w-auto' />
                  ) : (
                    <HeartIcon className='w-6 lg:w-auto' />
                  )}
                </div>
              </Figure>
            </div>
            <Divider />
            <Comment data={item.comments.slice().reverse()} />
            <div className='flex mt-6'>
              <Avatar
                className='lg:h-[3.25rem] lg:w-[3.25rem] w-10 h-10'
                img={getImage(authUser?.avatar)}
                size={52}
                loading={!authUser?.avatar}
              />
              <AddComment quoteId={item.id} />
            </div>
          </div>
        ))
      ) : (
        <p className='flex w-full col-span-2'>{t('noQuotes')}</p>
      )}
    </div>
  );
};

export default Feed;
