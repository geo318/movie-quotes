import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

export const useInputText = ({
  name,
  value,
  select,
}: {
  name: string;
  value?: string | number;
  select?: boolean;
}) => {
  const [show, setShow] = useState(false);
  const [blur, setBlur] = useState(false);
  const {
    register,
    setValue,
    formState: { errors, dirtyFields },
  } = useFormContext();
  const toggleShow = () => setShow((prev) => !prev);
  useEffect(() => {
    if (!select && !value) return;
    setValue(name, value);
  }, [value, name, select, setValue]);

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
