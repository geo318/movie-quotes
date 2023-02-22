import { Divider, Plus, Button } from 'components';
import { useScreenWidth } from 'hooks';
import Link from 'next/link';

const AddEmailButton = () => {
  const isMobile = useScreenWidth();
  return (
    <div className='flex flex-col'>
      {isMobile && <div className='uppercase mb-4 mt-10'>Add new email</div>}
      <Link
        href={isMobile ? '?add-new-email' : '?add-email'}
        className='lg:mb-10 w-full lg:w-auto'
      >
        <Button
          text={isMobile ? 'Add' : 'Add new email'}
          className='lg:mr-auto w-full lg:w-auto justify-center lg:justify-start flex items-center gap-2 xl:!text-xl mt-4'
        >
          <Plus />
        </Button>
      </Link>
    </div>
  );
};

export default AddEmailButton;
