import { FC } from 'react';
import { Search, AddQuote, Post } from 'components';
import { FeedProps } from './types';
import { useFeed } from './useFeed';

const Feed: FC<FeedProps> = ({ data, nextPage, loading }) => {
  const { lastFeedElementRef, ref, search, handleSearch, t } = useFeed({
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
        <Post post={data} lastFeedElementRef={lastFeedElementRef} />
      ) : (
        <p className='flex w-full col-span-2'>{t('noQuotes')}</p>
      )}
    </div>
  );
};

export default Feed;
