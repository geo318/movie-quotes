import { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';
import { useScreenWidth } from 'hooks';
import { useTranslation } from 'next-i18next';

export const useImageUpload = ({
  name,
  handleImage,
}: {
  name: string;
  handleImage: (img: string) => void;
}) => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();
  const isMobile = useScreenWidth();
  const { t } = useTranslation('shared');

  const checkFile = useCallback(
    (file: Blob) => {
      const readImage = new FileReader();
      readImage.readAsDataURL(file);
      readImage.onload = async () => {
        handleImage(readImage.result as string);
      };
    },
    [handleImage]
  );

  const handleDrop = (file: Blob[]) => {
    checkFile(file[0]);
    setValue(name, file[0], { shouldValidate: true });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (file) => handleDrop(file),
  });

  const readImage = useCallback(
    async (file: Blob) => {
      checkFile(file);
    },
    [checkFile]
  );

  return {
    register,
    readImage,
    errors,
    dragging: isDragActive,
    getRootProps,
    getInputProps,
    handleDrop,
    isMobile,
    t,
  };
};
