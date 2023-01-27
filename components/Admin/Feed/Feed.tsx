import { FC } from 'react';
import { Avatar, ChatIcon, Divider, HeartIcon } from 'components';
import { FeedData, FeedProps } from './types';
import Image from 'next/image';
import { getImage } from 'helpers';
import { Figure } from '../Figure';

const Feed: FC<FeedProps> = ({ data }) => {
  return (
    <div className='grid grid-cols-3 min-h-full gap-10 pb-28'>
      {data?.map((item: FeedData) => (
        <div
          key={item.id}
          className='col-span-2 rounded-xl bg-app-black-dark h-[50rem] px-6 pt-6 pb-10'
        >
          <Avatar
            text={item.user.username}
            img={`${process.env.NEXT_PUBLIC_BASE_URL}${item.user.avatar}`}
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
              className='min-w-full h-full object-cover'
            />
          </div>
          <div className='flex gap-8 mt-6 mb-5'>
            <Figure count={3} className='gap-4'>
              <ChatIcon />
            </Figure>
            <Figure count={3}>
              <HeartIcon />
            </Figure>
          </div>
          <Divider />
        </div>
      ))}
    </div>
  );
};

export default Feed;
