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
import { ProfileSubmitProps } from 'types';

const Profile = () => {
  const { lang, user, refetch, t, schema, onSubmit, formState, setFormState } =
    useProfile();

  return (
    <AdminLayout>
      <ProfileModals refetch={refetch} />
      <div className='grid xl:grid-cols-9 grid-cols-2'>
        <div className='lg:col-span-7 col-span-9'>
          <h1 className='sm:text-2xl text-xl sm:line-clamp-none line-clamp-1 pb-14'>
            {t('myProfile')}
          </h1>
          <div>
            <FormWrapper
              schema={schema}
              onSubmit={onSubmit as any}
              fill
              className='flex flex-col'
            >
              <div className='bg-app-black-dark rounded-xl mb-12 px-20'>
                <div className='w-full flex items-center justify-center mt-16'>
                  <ProfileImageUpload
                    name='user_avatar'
                    path={user.avatar}
                    className='-mt-16 w-full'
                  />
                </div>
                <div className='flex flex-col justify-center items-start mt-10'>
                  <div className='w-full'>
                    <Input
                      label='Username'
                      name='username'
                      control='Edit'
                      value={user.username}
                      placeholder={user.username}
                      editable
                    />
                  </div>

                  <Divider className='my-10 flex w-[70%]' />
                  <div className='flex flex-col gap-4 w-full'>
                    {!user.gmail ? (
                      <Input
                        label='Email'
                        primary
                        control='Primary Email'
                        value={user.gmail || user.primary_email || user.email}
                      />
                    ) : (
                      <Input label='Email' value={user.gmail} />
                    )}
                    {!user.gmail &&
                      user?.emails
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
                    {!user.gmail && (
                      <>
                        <Link href='?add-email' className='mb-10'>
                          <Button
                            text='Add new email'
                            className='mr-auto flex items-center gap-2 xl:!text-xl mt-4'
                          >
                            <Plus />
                          </Button>
                        </Link>
                        <Divider />
                        <Input
                          label='Password'
                          name='password'
                          control='Edit'
                          placeholder='Password'
                          editable
                          password
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>
              {formState && (
                <div className='flex gap-6 pb-24 px-20 ml-auto'>
                  <div
                    className='px-2 py-2 cursor-pointer'
                    onClick={() => setFormState()}
                  >
                    Cancel
                  </div>
                  <Button
                    text='Save changes'
                    style='buttonRed'
                    className='!px-4'
                  />
                </div>
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
