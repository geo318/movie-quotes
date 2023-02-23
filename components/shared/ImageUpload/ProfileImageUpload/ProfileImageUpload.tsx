import { Img, Error } from 'components';
import { useProfileImageUpload } from './useProfileImageUpload';

const ProfileImageUpload = ({ name = '', className = '', path = '' }) => {
  const {
    register,
    readImage,
    errors,
    getRootProps,
    getInputProps,
    isMobile,
    image,
    t,
  } = useProfileImageUpload({ name });

  return (
    <div className={`group ${className}`}>
      <div
        {...getRootProps()}
        className='flex flex-col items-center justify-center gap-2 cursor-pointer'
      >
        <Img
          path={path}
          className='w-full max-w-[11.75rem] aspect-square rounded-full'
          image={image}
          priority
        />
        <div className='bg-app-gradient-dark opacity-80 inset-0 -z-10 rounded-ten text-xl' />
        <p className='group-hover:underline'>{t('changePhoto')}</p>
        <input
          id={name}
          type='file'
          className='hidden'
          {...register(name, {
            onChange: (e) => {
              readImage(e.target.files[0]);
            },
          })}
          {...getInputProps()}
        />
      </div>
      <Error errors={errors} name={name} />
    </div>
  );
};

export default ProfileImageUpload;
