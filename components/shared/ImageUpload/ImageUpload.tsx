import { Photo, Button } from 'components';
import { FC } from 'react';
import { ImageUpProps } from './type';
import { useImageUpload } from './useImageUpload';

const ImageUpload: FC<ImageUpProps> = ({
  name,
  image,
  handleImage,
  reUpload,
}) => {
  const {
    register,
    readImage,
    errors,
    dragging,
    getRootProps,
    getInputProps,
    isMobile,
    t,
  } = useImageUpload({
    handleImage,
    name,
  });

  return (
    <div>
      {reUpload ? (
        <div
          className='flex flex-col items-center px-4 pb-4 pt-5 cursor-pointer'
          {...getRootProps()}
        >
          <div className='absolute bg-app-gradient-dark opacity-80 inset-0 -z-10 rounded-ten' />
          <div className='w-5'>
            <Photo />
          </div>
          <p>{t('changePhoto')}</p>
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
      ) : (
        <div
          className={`flex gap-4 lg:text-lg text-base items-center relative w-full px-4 py-5 border border-app-dark-gray rounded-[.25rem] hover:border-white ${
            dragging ? 'border-dashed' : image ? '!border-white' : ''
          }`}
          {...getRootProps()}
        >
          <Photo />
          <p>{isMobile ? t('uploadImage') : t('dragAndDrop')}</p>
          <Button
            text={t('chooseFile')}
            className='!rounded-sm !bg-[#9747FF] !bg-opacity-60 !border-0 hover:!bg-opacity-40 ml-auto lg:ml-0'
            typeButton
          >
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
          </Button>
        </div>
      )}
      {errors?.[name] ? (
        <div className='mt-1'>
          <span className='text-app-red text-sm leading-6'>
            {errors?.[name] && <p>{errors[name]!.message as string}</p>}
          </span>
        </div>
      ) : null}
    </div>
  );
};
export default ImageUpload;
