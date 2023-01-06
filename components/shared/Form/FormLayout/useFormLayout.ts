import { useFormContext } from 'react-hook-form';

export const useFormLayout = () => {
  const { handleSubmit } = useFormContext();
  const onSubmitForm = (data: { [key: string]: string }) => console.log(data);
  return { handleSubmit, onSubmitForm };
};
