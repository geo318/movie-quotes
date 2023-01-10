import { Button, Heading, Modal, Spinner } from 'components';
import Link from 'next/link';
import { FC } from 'react';
import { NotificationSocketProps } from './types';

const NotificationSocket: FC<NotificationSocketProps> = ({
  icon,
  link,
  skip = false,
  heading,
  sub,
  callToAction,
  loading = false,
}) => {
  return (
    <Modal className='px-20 py-[3.25rem] max-w-[35rem]' close>
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
            <Link href={link} className='w-full'>
              <Button
                text={callToAction}
                style='buttonRed'
                className='w-full'
              />
            </Link>
            <>
              {skip && (
                <Link
                  href=''
                  className='text-app-dark-gray leading-normal mt-8'
                >
                  Skip, I’ll confirm later
                </Link>
              )}
            </>
          </>
        )}
      </div>
    </Modal>
  );
};

export default NotificationSocket;
