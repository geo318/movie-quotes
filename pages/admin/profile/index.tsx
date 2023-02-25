import {
  AddEmailButton,
  AddEmailPage,
  AdminLayout,
  ArrowOutline,
  Divider,
  Emails,
  FormSubmit,
  FormWrapper,
  Input,
  LoadingSlot,
  Mobile,
  PasswordPage,
  ProfileHeader,
  ProfileImageUpload,
  ProfileModals,
  UsernamePage,
} from 'components';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { checkLoggedIn } from 'services';
import { useProfile } from 'hooks';
import Link from 'next/link';

const Profile = () => {
  const {
    isMobile,
    user,
    refetch,
    t,
    schema,
    onSubmit,
    formState,
    setFormState,
    isLoading,
    isActiveProfile,
    isActive,
    profileNavigationKeys,
  } = useProfile();

  return (
    <AdminLayout layoutClassName='!mt-6'>
      <ProfileModals refetch={refetch} />

      <div className='grid xl:grid-cols-9 grid-cols-2'>
        <div className='2xl:col-span-7 col-span-9'>
          <ProfileHeader />
          <div
            className={
              isMobile
                ? 'lg:bg-app-black-dark bg-[#24222F] rounded-xl mb-12 xl:px-20 px-8 pb-12 lg:mx-0 -mx-8'
                : ''
            }
          >
            {isMobile && isActive(profileNavigationKeys[2]) && (
              <AddEmailPage refetch={refetch} />
            )}
            {isMobile && isActive(profileNavigationKeys[1]) && (
              <PasswordPage refetch={refetch} />
            )}
            {isMobile && isActive(profileNavigationKeys[3]) && (
              <UsernamePage refetch={refetch} />
            )}
            <FormWrapper
              schema={schema}
              onSubmit={onSubmit}
              fill
              className='flex flex-col'
            >
              <div
                className={
                  !isMobile
                    ? 'lg:bg-app-black-dark bg-[#24222F] rounded-xl mb-12 xl:px-20 px-8 pb-12 lg:mx-0 -mx-8'
                    : ''
                }
              >
                <LoadingSlot isLoading={isLoading}>
                  {isActiveProfile ? (
                    <Mobile
                      user={user}
                      refetch={refetch}
                      formState={formState}
                      setFormState={setFormState}
                    />
                  ) : (
                    <>
                      <div className='w-full flex items-center justify-center'>
                        <ProfileImageUpload
                          name='avatar'
                          path={user.avatar}
                          className='lg:-mt-16 mt-10 w-full'
                        />
                      </div>
                      <div className='flex flex-col justify-center items-start mt-10'>
                        <div className='w-full lg:m-0 mb-5'>
                          <Input
                            label={t('username') as string}
                            name='username'
                            control={t('edit') as string}
                            value={user.username}
                            placeholder={user.username}
                            editable
                            className='lg:max-w-[33rem]'
                          />
                        </div>

                        <Divider className='lg:flex hidden w-[33rem] my-10' />

                        <div className='lg:flex flex-col gap-4 w-full lg:m-0 mb-4'>
                          {!isMobile && (
                            <Emails refetch={refetch} user={user} />
                          )}

                          {!user.gmail && (
                            <>
                              {!isMobile && <AddEmailButton />}

                              <Input
                                label={t('password') as string}
                                name='password'
                                control={t('edit') as string}
                                placeholder={t('password') as string}
                                editable
                                password
                              />
                            </>
                          )}
                        </div>

                        {isMobile && (
                          <Link
                            href='?emails'
                            className='uppercase flex w-full items-center'
                          >
                            <div>{t('email')}</div>
                            <div className='ml-auto'>
                              <ArrowOutline />
                            </div>
                          </Link>
                        )}
                      </div>
                    </>
                  )}
                </LoadingSlot>
              </div>

              <FormSubmit
                className='absolute lg:relative top-20 inset-x-0 lg:w-auto'
                formState={formState}
                setFormState={setFormState}
              />
            </FormWrapper>
            <div className='lg:h-32' />
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
    'home',
    'profile',
    'shared',
  ]);

  return {
    props: {
      ...translation,
    },
  };
};
