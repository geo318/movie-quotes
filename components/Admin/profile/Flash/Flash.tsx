import { CheckMark, CloseFlash } from 'components';
import { useFlash } from './useFlash';

const Flash = () => {
  const { message, closePopup, pop } = useFlash();
  return (
    <>
      {pop && (
        <div className='h-32 max-w-[25rem] w-full bg-[#D1E7DD] text-base z-50 fixed top-36 right-36 rounded-four'>
          <div className='flex gap-2 p-4'>
            <CheckMark big />
            <p className='text-[#0F5132]'>A simple alert — check it out!</p>
            <div className='ml-auto cursor-pointer' onClick={closePopup}>
              <CloseFlash />
            </div>
          </div>
          <p className='pl-10 pt-1 text-app-black-dark'>{message}</p>
        </div>
      )}
    </>
  );
};

export default Flash;
