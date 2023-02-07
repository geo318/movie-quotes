import { Avatar, Bell, HeartIcon, Quote } from 'components';
import { getImage, getTimeElapsed } from 'helpers';
import { useAuthUser } from 'hooks';
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
      <Bell />
      {num > 0 && (
        <div className='absolute -top-2 -right-2 w-[1.56rem] h-[1.56rem] bg-[#E33812] rounded-full flex justify-center items-center text-base'>
          {num}
        </div>
      )}
    </div>
  );

  const dropdown = (
    <div className='notification overflow-y-auto max-h-[48rem] py-10 px-8 flex flex-col gap-4'>
      <div className='mb-5 flex items-center'>
        <h3 className='text-3xl'>Notifications</h3>
        <p
          className='text-xl underline cursor-pointer ml-auto'
          onClick={() => markAllAsReadHandler({ num: notifications.length })}
        >
          Mark All As Read
        </p>
      </div>
      {notifications?.length ? (
        notifications.map((n) => (
          <div
            key={n.id}
            className='flex px-6 py-[1.125rem] border border-[#EFEFEF] 
              border-opacity-[.3] rounded items-center cursor-pointer hover:border-opacity-[.5]'
            onClick={() => markAsReadHandler({ id: n.id, read: !!n.read })}
          >
            <Avatar
              img={getImage(n.user.avatar)}
              size={80}
              className='w-20 !border-app-green'
              active={!n.read}
            />
            <div className='flex flex-col gap-2 text-xl'>
              <p>{n.user.username}</p>
              <div className='flex gap-3'>
                {n.comment_id ? <Quote /> : <HeartIcon full />}
                <p className='text-[#CED4DA]'>
                  {n.comment_id
                    ? 'Commented to your movie quote'
                    : 'Reacted to your quote'}
                </p>
              </div>
            </div>
            <div className='ml-auto text-xl flex flex-col justify-center items-end gap-2'>
              <p>
                {getTimeElapsed(n.created_at, router.locale as 'ka' | 'en')} ago
              </p>
              <p className='min-h-[1.8rem] text-app-green'>
                {!n.read ? 'New' : ''}
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
