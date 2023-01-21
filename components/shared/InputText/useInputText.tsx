import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

export const useInputText = () => {
  const [show, setShow] = useState(false);
  const [blur, setBlur] = useState(false);
  const {
    register,
    setValue,
    formState: { errors, dirtyFields },
  } = useFormContext();
  const toggleShow = () => setShow((prev) => !prev);
  return {
    register,
    errors,
    dirtyFields,
    show,
    toggleShow,
    blur,
    setBlur,
    setValue,
  };
};
