import { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';

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
    setError,
    formState: { errors },
  } = useFormContext();

  const checkFile = useCallback(
    (file: Blob) => {
      const imageTypes = ['image/bmp', 'image/webp', 'image/png', 'image/jpeg'];
      if (!imageTypes.includes(file.type) || !file.size) {
        handleImage('');
        setTimeout(() => {
          setError(name, {
            type: 'custom',
            message: 'This file is of a wrong type',
          });
        }, 0);
        return;
      }
      const readImage = new FileReader();
      readImage.readAsDataURL(file);
      readImage.onload = async () => {
        handleImage(readImage.result as string);
      };
    },
    [name, setError, handleImage]
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
  };
};
