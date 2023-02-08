import { Photo } from 'components/icons';
import { FC } from 'react';
import { Button } from '../Button';
import { InputProps } from '../InputText/types';
import { useImageUpload } from './useImageUpload';

const ImageUpload: FC<InputProps> = ({ name }) => {
  const {
    register,
    readImage,
    errors,
    dragging,
    getRootProps,
    getInputProps,
    image,
  } = useImageUpload({
    name,
  });

  return (
    <div
      className={`w-full px-4 py-5 border border-app-dark-gray rounded-[.25rem] hover:border-white ${
        dragging ? 'border-dashed' : image ? '!border-white' : ''
      }`}
    >
      <div
        className='flex gap-4 text-lg items-center relative'
        {...getRootProps()}
      >
        <Photo />
        <p>Drag & drop your image here or</p>
        <Button
          text='Choose file'
          className='!rounded-sm !bg-[#9747FF] !bg-opacity-60 !border-0 hover:!bg-opacity-40'
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
