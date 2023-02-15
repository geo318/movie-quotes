import { Bin, Pen } from 'components';
import Link from 'next/link';
import { useEditMovie } from './useEditMovie';

const EditMovie = () => {
  const { path, handleDelete } = useEditMovie();
  return (
    <div className='flex bg-[#24222F] bg-opacity-40 rounded-lg p-[0.125rem] ml-2'>
      <Link href={`${path}?edit-movie`}>
        <div className='px-6 py-3'>
          <Pen />
        </div>
      </Link>

      <div className='w-0 border-r border-app-dark-gray my-3' />
      <div className='px-6 py-3 cursor-pointer' onClick={handleDelete}>
        <Bin />
      </div>
    </div>
  );
};

export default EditMovie;
