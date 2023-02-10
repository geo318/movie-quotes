import { Avatar, Bell, HeartIcon, Quote } from 'components';
import { getImage, getTimeElapsed } from 'helpers';
import { useAuthUser } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';
import { echo, getNotifications, markAllAsRead, markAsRead } from 'services';
import { feedActions, noteActions } from 'store';
import { RootState, Notification, AddComment } from 'types';

export const useNotification = () => {
  const [initialized, setInitialized] = useState(false);
  const dispatch = useDispatch();
  const { t } = useTranslation('shared');
  const router = useRouter();
  const { data } = useQuery({
    queryKey: 'notifications',
    queryFn: getNotifications,
  });

  const user = useAuthUser();

  useEffect(() => {
    if (user) {
      setInitialized(true);
      if (initialized) {
        echo.connect();
        echo
          .private(`notifications.${user!.id}`)
          .listen('NewNotification', (data: { notification: Notification }) => {
            const note = data.notification;
            dispatch(noteActions.newNotification(note));
            note.comment_id &&
              dispatch(feedActions.addComment(note.comment as AddComment));
            note.like_id &&
              dispatch(
                feedActions.toggleLike({
                  quoteId: note.quote_id,
                  userId: note.destination_user_id,
                })
              );
          });
      }
    }
    return () => {
      if (initialized) echo.disconnect();
      setInitialized(false);
    };
  }, [user, initialized, dispatch]);

  const notificationsData: Notification[] = data?.data;
  useEffect(() => {
    dispatch(noteActions.setNotifications(notificationsData));
  }, [notificationsData, dispatch]);

  const notifications = useSelector(
    (state: RootState) => state.note.notifications
  );

  const markAsReadHandler = async ({
    id,
    read,
  }: {
    id: number;
    read: boolean;
  }) => {
    if (read) return;
    try {
      dispatch(noteActions.markAsRead(id));
      await markAsRead({ id });
    } catch {}
  };
  const markAllAsReadHandler = async ({ num }: { num: number }) => {
    try {
      dispatch(noteActions.markAllAsRad());
      await markAllAsRead({ num });
    } catch {}
  };

  const num = notifications?.filter((e) => e.read === 0).length;
  const selector = (
    <div className='cursor-pointer relative'>
      <Bell className='w-6 lg:w-auto' />
      {num > 0 && (
        <div className='absolute -top-2 -right-2 w-[1.56rem] h-[1.56rem] bg-[#E33812] rounded-full flex justify-center items-center text-base'>
          {num}
        </div>
      )}
    </div>
  );

  const dropdown = (
    <div className='notification overflow-y-auto max-h-[48rem] lg:py-10 py-3 px-8 flex flex-col gap-4'>
      <div className='mb-5 flex items-center'>
        <h3 className='lg:text-3xl text-xl'>{t('notifications')}</h3>
        <p
          className='lg:text-xl text-sm underline cursor-pointer ml-auto'
          onClick={() => markAllAsReadHandler({ num: notifications.length })}
        >
          {t('markAllAsRead')}
        </p>
      </div>
      {notifications?.length ? (
        notifications.map((n) => (
          <div
            key={n.id}
            className='lg:flex gap-6 block lg:px-6 px-4 py-[1.125rem] border border-[#EFEFEF] 
              border-opacity-[.3] rounded items-center cursor-pointer hover:border-opacity-[.5]'
            onClick={() => markAsReadHandler({ id: n.id, read: !!n.read })}
          >
            <Avatar
              img={getImage(n.user.avatar)}
              size={80}
              className='lg:w-20 w-14 !border-app-green'
              active={!n.read}
              containerStyle='!inline-block float-left lg:float-none absolute lg:relative'
            />
            <div className='lg:flex inline-block float-left lg:float-none flex-col gap-2 lg:text-xl text-base ml-3 xl:ml-0 pl-14 lg:pl-0 h-14 lg:h-auto'>
              <p>{n.user.username}</p>
              <div className='flex gap-3 mt-1 lg:mt-0'>
                {n.comment_id ? <Quote /> : <HeartIcon full />}
                <p className='text-[#CED4DA] line-clamp-1'>
                  {n.comment_id ? t('commented') : t('reacted')}
                </p>
              </div>
            </div>
            <div className='ml-auto mt-1 lg:mt-0 lg:text-xl text-base flex lg:flex-col flex-row-reverse lg:justify-center justify-end lg:items-end gap-2 w-full lg:w-auto'>
              <p className='text-app-gray lg:text-white ml-1 lg:ml-0'>
                {`${getTimeElapsed(
                  n.created_at,
                  router.locale as 'ka' | 'en'
                )} ${t('ago')}`}
              </p>
              <p className='min-h-[1.8rem] text-app-green lg:w-auto w-14 text-center'>
                {!n.read ? t('new') : ''}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p>No notifications yet.</p>
      )}
    </div>
  );

  return { selector, dropdown };
};
