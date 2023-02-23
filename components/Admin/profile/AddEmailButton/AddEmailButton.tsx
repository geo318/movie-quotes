import { Plus, Button } from 'components';
import Link from 'next/link';
import { useAddEmailButton } from './useAddEmailButton';

const AddEmailButton = () => {
  const { t, isMobile } = useAddEmailButton();
  return (
    <div className='flex flex-col'>
      {isMobile && (
        <div className='uppercase mb-4 mt-10'>{t('addNewEmail')}</div>
      )}
      <Link
        href={isMobile ? '?add-new-email' : '?add-email'}
        className='lg:mb-10 w-full lg:w-auto'
      >
        <Button
          text={isMobile ? t('add') : t('addNewEmail')}
          className='lg:mr-auto w-full lg:w-auto justify-center lg:justify-start flex items-center gap-2 xl:!text-xl mt-4'
        >
          <Plus />
        </Button>
      </Link>
    </div>
  );
};

export default AddEmailButton;
