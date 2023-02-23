import { useAuthUser } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';
import { getNotifications, markAllAsRead, markAsRead } from 'services';
import { feedActions, noteActions } from 'store';
import { RootState, Notification, AddComment } from 'types';
import { useEcho } from 'hooks';

export const useNotification = () => {
  useEcho();
  const [initialized, setInitialized] = useState(false);
  const dispatch = useDispatch();
  const { t } = useTranslation('shared');
  const router = useRouter();
  const user = useAuthUser();
  const { data } = useQuery({
    queryKey: 'notifications',
    queryFn: getNotifications,
  });

  useEffect(() => {
    if (user && typeof window != null) {
      setInitialized(true);
      if (initialized) {
        window.echo.connect();
        window.echo
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
      if (initialized) window.echo.disconnect();
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

  return {
    num,
    markAllAsReadHandler,
    markAsReadHandler,
    notifications,
    router,
    t,
  };
};
