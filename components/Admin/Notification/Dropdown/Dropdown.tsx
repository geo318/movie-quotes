import { Avatar, HeartIcon, Quote, useNotification } from 'components';
import { getImage, getTimeElapsed } from 'helpers';

const Dropdown = ({}) => {
  const { markAllAsReadHandler, markAsReadHandler, notifications, router, t } =
    useNotification();
  return (
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
        <p>{t('noNotifications')}</p>
      )}
    </div>
  );
};

export default Dropdown;
