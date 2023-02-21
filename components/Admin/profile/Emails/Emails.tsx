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
                label={isMobile ? 'PRIMARY EMAIL' : 'Email'}
                primary
                control='Primary Email'
                value={user.gmail || user.primary_email || user.email}
              />
              {isMobile && (
                <Divider className='mb-6 !border-app-gray !border-opacity-50' />
              )}
            </>
          ) : (
            <Input label='Email' value={user.gmail} />
          )}
          {!user.gmail &&
            user?.emails
              ?.slice()
              .filter((e) => e.email !== user.primary_email)
              .map((e) => (
                <div key={e.id} className='mb-2 lg:m-0'>
                  <Input
                    label={isMobile ? '' : 'Email'}
                    control={
                      !e.email_verified_at && e.email === user.email
                        ? 'Not verified'
                        : 'Make this primary'
                    }
                    verify={!e.email_verified_at && e.email === user.email}
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
