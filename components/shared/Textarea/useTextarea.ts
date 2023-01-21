import { useFormContext } from 'react-hook-form';

export const useTextarea = () => {
  const { register } = useFormContext();
  return { register };
};
