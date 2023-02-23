import { Spinner, Heading, Modal } from 'components';
import { FC } from 'react';
import { PopupProps } from './type';

const Popup: FC<PopupProps> = ({ icon, heading, sub, loading = false }) => {
  return (
    <Modal
      close={false}
      className='px-20 py-[3.25rem] max-w-[35rem] top-20 lg:top-0 !w-auto mx-9 max-h-96'
    >
      <div className='px-2 flex flex-col justify-center items-center'>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <>{icon}</>
            <Heading
              heading={heading}
              sub={sub}
              className='text-center mt-5 mb-10'
              subStyle='!text-white'
            />
          </>
        )}
      </div>
    </Modal>
  );
};

export default Popup;
