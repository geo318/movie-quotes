import {
  Avatar,
  Bin,
  Divider,
  Modal,
  Pen,
  Post,
  QuoteModalProps,
} from 'components';
import { getImage } from 'helpers';
import Link from 'next/link';
import { FC } from 'react';
import { useViewQuote } from './useViewQuote';

const ViewQuote: FC<QuoteModalProps> = ({ refetch, quotes }) => {
  const { handleQuoteDelete, user, t, quote } = useViewQuote({
    refetch,
    quotes,
  });

  return (
    <Modal
      z
      containerStyle='!items-start lg:mt-28 !lg:max-w-[60rem]'
      className='lg:min-w-[60rem] !bg-app-black-dark !px-0 !py-6 !z-50'
    >
      <div className='px-8 mb-6 relative'>
        <div className='flex absolute'>
          {quote?.movie_id && (
            <Link href={`${quote?.movie_id}?edit-quote`}>
              <div className='pr-6 py-1'>
                <Pen />
              </div>
            </Link>
          )}
          <div className='w-0 border-r border-app-dark-gray my-1' />
          <div
            className='pl-6 py-1 cursor-pointer'
            onClick={() => handleQuoteDelete(quote?.id)}
          >
            <Bin />
          </div>
        </div>
        <h3 className='lg:text-2xl text-xl text-center'>{t('addQuote')}</h3>
      </div>
      <Divider />

      <div className='px-8'>
        <Avatar
          img={getImage(user?.avatar || '')}
          text={user?.username}
          size={60}
          className='w-[3.75rem] h-[3.75rem]'
          containerStyle='mt-[1.875rem] items-center mb-6'
          loading={!user?.id}
        />
        <Post post={[quote]} modal />
      </div>
    </Modal>
  );
};

export default ViewQuote;
