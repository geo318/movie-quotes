import { ProfileProps } from 'types';
import { Divider, Input } from 'components';
import { useEmails } from './useEmails';

const Emails = ({ user, refetch }: Partial<ProfileProps>) => {
  const { isMobile, t } = useEmails();
  return (
    <>
      {user && (
        <>
          {!user.gmail ? (
            <>
              <Input
                label={
                  isMobile
                    ? (t('primaryEmail') as string)
                    : (t('email') as string)
                }
                primary
                control={t('primaryEmail') as string}
                value={user.gmail || user.primary_email || user.email}
              />
              {isMobile && (
                <Divider className='mb-6 !border-app-gray !border-opacity-50' />
              )}
            </>
          ) : (
            <Input label={t('email') as string} value={user.gmail} />
          )}
          {!user.gmail &&
            user?.emails
              ?.slice()
              .filter((e) => e.email !== user.primary_email)
              .map((e) => (
                <div key={e.id} className='mb-2 lg:m-0'>
                  <Input
                    label={isMobile ? '' : (t('email') as string)}
                    control={
                      !e.email_verified_at
                        ? (t('notVerified') as string)
                        : (t('makeThisPrimary') as string)
                    }
                    verify={!e.email_verified_at}
                    verified={!!e.email_verified_at}
                    value={e.email}
                    refetch={refetch}
                  />
                </div>
              ))}
        </>
      )}
    </>
  );
};

export default Emails;
