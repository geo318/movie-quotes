import { getImage } from 'helpers';
import { FC } from 'react';
import { Comment } from 'types';
import { Avatar } from 'components';
import { useComment } from './useComment';

const Comment: FC<{ data: Comment[] }> = ({ data }) => {
  const { show, toggleShow } = useComment();
  return (
    <div className='my-6'>
      {data?.map((item: Comment, index: number) => {
        if (index > 1 && !show) return;
        return (
          <div key={item.id} className='mb-6 text-xl leading-7'>
            <Avatar
              className='h-[3.25rem] w-[3.25rem]'
              img={getImage(item.user.avatar)}
              size={52}
              text={item.user.username}
            />
            <p className='lg:ml-[4.75rem]'>{item.comment}</p>
          </div>
        );
      })}
      <p
        onClick={toggleShow}
        className='text-app-link text-base cursor-pointer lg:ml-[4.75rem]'
      >
        {show ? 'Hide' : 'See more'}
      </p>
    </div>
  );
};

export default Comment;
