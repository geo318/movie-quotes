import { getImage } from 'helpers';
import { FC } from 'react';
import { Comment } from 'types';
import { Avatar, Divider } from 'components';
import { useComment } from './useComment';

const Comment: FC<{ data: Comment[] }> = ({ data }) => {
  const { show, toggleShow, t } = useComment();
  return (
    <div className='my-6'>
      {data?.map((item: Comment, index: number) => {
        if (index > 1 && !show) return;
        return (
          <div key={item.id} className='lg:mb-6 mb-4 lg:text-xl lg:leading-7'>
            <Avatar
              className='lg:h-[3.25rem] lg:w-[3.25rem] w-10 h-10'
              img={getImage(item.user.avatar)}
              size={52}
              text={item.user.username}
            />
            <div className='lg:ml-[4.75rem] lg:mt-0 mt-3'>
              <p className='lg:mb-6 mb-5'>{item.comment}</p>
              <Divider />
            </div>
          </div>
        );
      })}
      {data?.length > 2 && (
        <p
          onClick={toggleShow}
          className='text-app-link text-base cursor-pointer lg:ml-[4.75rem]'
        >
          {show ? t('hide') : t('seeMore')}
        </p>
      )}
    </div>
  );
};

export default Comment;
