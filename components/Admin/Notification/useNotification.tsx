import { Bell, Spinner } from 'components';
import { useAuthUser } from 'hooks';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';
import { echo, getNotifications, markAllAsRead, markAsRead } from 'services';
import { noteActions } from 'store';
import { RootState } from 'types';

export const useNotification = () => {
  const dispatch = useDispatch();
  const { data } = useQuery({
    queryKey: 'notifications',
    queryFn: getNotifications,
  });

  const user = useAuthUser();

  useEffect(() => {
    if (user) {
      console.log(user.id);
      echo.connect();
      echo
        .private(`notifications.${user!.id}`)
        .listen('NewNotification', (data: any) => {
          console.log(data);
        });
    }
  }, [user]);

  useEffect(() => {
    const notifications = data?.data;
    dispatch(noteActions.setNotifications(notifications));
  }, [data?.data, dispatch]);

  const notifications = useSelector(
    (state: RootState) => state.note.notifications
  );

  const markAsReadHandler = async ({ id }: { id: number }) => {
    try {
      await markAsRead({ id });
    } catch {}
  };
  const markAllAsReadHandler = async ({ num }: { num: number }) => {
    try {
      await markAllAsRead({ num });
    } catch {}
  };

  const selector = (
    <div className='cursor-pointer'>
      <Bell />
    </div>
  );

  const dropdown = (
    <div>
      {notifications?.length ? (
        notifications.map((n) => <div key={n.id}>{n.user.username}</div>)
      ) : (
        <Spinner />
      )}
    </div>
  );


  return { selector, dropdown };
};
