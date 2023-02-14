import { getImage } from 'helpers';
import Image from 'next/image';

const Img = ({ path = '', alt = '', size = '', className = '' }) => {
  return (
    <>
      {path && (
        <div className={`${className} relative overflow-hidden`}>
          <Image
            src={getImage(path)}
            alt={alt || ''}
            fill
            sizes={size ? size : '(max-width: 500px) 50vw, 90vw'}
            className='w-full object-cover'
          />
        </div>
      )}
    </>
  );
};

export default Img;
