import { FC } from 'react';

const Feed: FC<FeedProps> = ({ data }) => {
  return (
    <div className='grid grid-cols-3 min-h-full gap-10'>
      <div className='col-span-2 rounded-xl bg-app-black-dark h-[50rem]'></div>
      <div className='col-span-2 rounded-xl bg-app-black-dark h-[50rem]'></div>
    </div>
  );
};

export default Feed;
