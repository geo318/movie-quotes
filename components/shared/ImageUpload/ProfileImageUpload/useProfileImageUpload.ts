import { useState } from 'react';
import { useImageUpload } from '../useImageUpload';

export const useProfileImageUpload = ({ name = '' }) => {
  const [image, setImage] = useState('');
  const handleImage = (img: string) => {
    setImage(img);
  };

  const {
    t,
    errors,
    register,
    isMobile,
    readImage,
    getRootProps,
    getInputProps,
  } = useImageUpload({
    handleImage,
    name,
  });

  return {
    getInputProps,
    getRootProps,
    readImage,
    isMobile,
    register,
    errors,
    image,
    t,
  };
};
