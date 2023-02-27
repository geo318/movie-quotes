import { Modal, Post } from 'components';
import { useReadQuote } from './useReadQuote';

const ReadQuote = ({ id }: { id?: number }) => {
  const { quote } = useReadQuote(id);
  return (
    <Modal
      z
      containerStyle='!items-start lg:mt-28 !lg:max-w-[60rem]'
      className='lg:min-w-[60rem] !bg-app-black-dark !px-0 !py-6 !z-50'
    >
      <div className='lg:px-0 px-8'>
        <Post post={quote} />
      </div>
    </Modal>
  );
};

export default ReadQuote;
