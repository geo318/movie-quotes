import { useFormContext } from 'react-hook-form';

export const useTextarea = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return { register, errors };
};
