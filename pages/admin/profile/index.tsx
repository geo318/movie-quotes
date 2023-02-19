import {
  AdminLayout,
  Divider,
  FormWrapper,
  Input,
  ProfileImageUpload,
  ProfileModals,
} from 'components';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { checkLoggedIn } from 'services';
import { useProfile } from 'hooks';

const Profile = () => {
  const { lang, user, t, schema, onSubmit, isFormSubmittable, checkFormState } =
    useProfile();
  return (
    <AdminLayout>
      <ProfileModals />
      <div className='grid xl:grid-cols-9 grid-cols-2'>
        <div className='lg:col-span-6 col-span-9'>
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
                <Input
                  label='Username'
                  name='username'
                  control='Edit'
                  value='some other text'
                  checkFormState={checkFormState as () => {}}
                  cancel={isFormSubmittable}
                />
                <Divider className='my-10 flex w-[70%]' />
                <div className='flex flex-col gap-8 w-full'>
                  <Input
                    label='Email'
                    primary
                    control='Primary Email'
                    value='some text'
                  />
                  <Input
                    label='Email'
                    verify
                    control='verify email'
                    value='some other text'
                  />
                  <Input
                    label='E mail'
                    control='verify email'
                    value='some other text'
                  />
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
