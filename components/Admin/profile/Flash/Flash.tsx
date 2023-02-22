import { CheckMark, CloseFlash } from 'components';
import { useFlash } from './useFlash';

const Flash = () => {
  const { message, closePopup, pop } = useFlash();
  return (
    <>
      {pop && (
        <>
          <div className='bg-app-bg bg-opacity-70 fixed inset-0 z-10 block lg:hidden' />
          <div className='hidden lg:block h-32 max-w-[25rem] w-full bg-[#D1E7DD] text-base z-50 fixed lg:top-36 top-32 right-36 rounded-four'>
            <div className='gap-2 p-4 flex'>
              <CheckMark big />
              <p className='text-[#0F5132]'>A simple alert — check it out!</p>
              <div className='ml-auto cursor-pointer' onClick={closePopup}>
                <CloseFlash />
              </div>
            </div>
            <p className='pl-10 pt-1 text-app-black-dark'>{message}</p>
          </div>
          <div className='block fixed top-32 inset-x-6 lg:hidden bg-[#D1E7DD] text-base z-50 rounded-four'>
            <div className='flex w-full items-center p-4'>
              <CheckMark big />
              <p className='pl-2 mr-auto text-[#0F5132]'>{message}</p>
              <div className='ml-auto cursor-pointer' onClick={closePopup}>
                <CloseFlash />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Flash;
