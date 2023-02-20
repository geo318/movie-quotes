import {
  AdminLayout,
  Button,
  Divider,
  FormWrapper,
  Input,
  Plus,
  ProfileImageUpload,
  ProfileModals,
} from 'components';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { checkLoggedIn } from 'services';
import { useProfile } from 'hooks';
import Link from 'next/link';

const Profile = () => {
  const {
    lang,
    user,
    refetch,
    t,
    schema,
    onSubmit,
    isFormSubmittable,
    checkFormState,
  } = useProfile();

  return (
    <AdminLayout>
      <ProfileModals refetch={refetch} />
      <div className='grid xl:grid-cols-9 grid-cols-2'>
        <div className='lg:col-span-7 col-span-9'>
          <h1 className='sm:text-2xl text-xl sm:line-clamp-none line-clamp-1 pb-14'>
            {t('myProfile')}
          </h1>
          <div className='bg-app-black-dark rounded-xl'>
            <FormWrapper schema={schema} onSubmit={onSubmit as any} fill>
              <div className='w-full flex items-center justify-center mt-16'>
                <ProfileImageUpload
                  name='user_avatar'
                  path={user.avatar}
                  className='-mt-16 w-full'
                />
              </div>
              <div className='flex flex-col lg:px-20 justify-center items-start mt-10'>
                <div className='w-full'>
                  <Input
                    label='Username'
                    name='username'
                    control='Edit'
                    value={user.username}
                    checkFormState={checkFormState as () => {}}
                    placeholder={user.username}
                    cancel={isFormSubmittable}
                    editable
                  />
                </div>

                <Divider className='my-10 flex w-[70%]' />
                <div className='flex flex-col gap-4 w-full'>
                  <Input
                    label='Email'
                    primary
                    control='Primary Email'
                    value={user.primary_email || user.email}
                  />
                  {user?.emails
                    ?.slice()
                    .filter((e) => e.email !== user.primary_email)
                    .map((e) => (
                      <div key={e.id}>
                        <Input
                          label='Email'
                          control={
                            !e.email_verified_at && e.email === user.email
                              ? 'Not verified'
                              : 'Make this primary'
                          }
                          verify={
                            !e.email_verified_at && e.email === user.email
                          }
                          verified={!!e.email_verified_at}
                          value={e.email}
                          refetch={refetch}
                        />
                      </div>
                    ))}
                  <Link href='?add-email'>
                    <Button
                      text='Add new email'
                      className='mr-auto flex items-center gap-2 xl:!text-xl mt-4'
                    >
                      <Plus />
                    </Button>
                  </Link>
                </div>
              </div>
              {isFormSubmittable && (
                <div onClick={() => checkFormState(false)}>cancel</div>
              )}
            </FormWrapper>
            <div className='h-32'></div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};
export default Profile;

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  req,
}) => {
  try {
    const cookies = req.headers.cookie;
    await checkLoggedIn({ cookies });
  } catch {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  const translation = await serverSideTranslations(locale as string, [
    'shared',
    'home',
  ]);

  return {
    props: {
      destination: '/admin/movies',
      ...translation,
    },
  };
};
