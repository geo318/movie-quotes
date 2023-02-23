import { ArrowBack } from 'components/icons';
import { useProfileHeader } from './useProfileHeader';

const ProfileHeader = () => {
  const { t, handleNavigateBack } = useProfileHeader();
  return (
    <div className='flex lg:mt-2'>
      <div
        className='mb-4 pb-2 pr-2 lg:hidden mr-auto'
        onClick={() => handleNavigateBack()}
      >
        <ArrowBack big />
      </div>
      <div className='hidden lg:block'>
        <h1 className='sm:text-2xl text-xl sm:line-clamp-none line-clamp-1 mb-[8rem]'>
          {t('myProfile')}
        </h1>
      </div>
    </div>
  );
};

export default ProfileHeader;
