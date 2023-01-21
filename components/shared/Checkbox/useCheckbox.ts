import { useFormContext } from 'react-hook-form';

export const useCheckbox = () => {
  const { register } = useFormContext();
  return { register };
};
