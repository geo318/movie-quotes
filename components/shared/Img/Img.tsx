import { getImage } from 'helpers';
import Image from 'next/image';

const Img = ({
  path = '',
  alt = '',
  size = '',
  className = '',
  image = '',
}) => {
  return (
    <>
      {path && (
        <div className={`${className} relative overflow-hidden h-full`}>
          <Image
            src={image || getImage(path)}
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
