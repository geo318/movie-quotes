import { ArrowBack } from 'components/icons';
import { useProfileHeader } from './useProfileHeader';

const ProfileHeader = () => {
  const { t, handleNavigateBack } = useProfileHeader();
  return (
    <>
      <div className='mb-6 lg:hidden' onClick={() => handleNavigateBack()}>
        <ArrowBack big />
      </div>
      <div className='hidden lg:block'>
        <h1 className='sm:text-2xl text-xl sm:line-clamp-none line-clamp-1 mb-[8rem]'>
          {t('myProfile')}
        </h1>
      </div>
    </>
  );
};

export default ProfileHeader;
