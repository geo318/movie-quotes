import { Button, Heading, Modal, Spinner } from 'components';
import Link from 'next/link';
import { FC } from 'react';
import { NotificationSocketProps } from './types';
import { useNotificationSocket } from './useNotificationSocket';

const NotificationSocket: FC<NotificationSocketProps> = ({
  icon,
  link,
  skip = false,
  heading,
  sub,
  callToAction,
  loading = false,
  onClick: onClickHandler,
}) => {
  const { t } = useNotificationSocket();
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
            <Link href={link} onClick={onClickHandler} className='w-full'>
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
                  {t('skip') as string}
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
