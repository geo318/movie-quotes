import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { RootState } from 'types';

export const useFormLayout = () => {
  const {
    handleSubmit,
    setError,
    reset,
    formState: { isSubmitSuccessful },
  } = useFormContext();
  const formErrors = useSelector((state: RootState) => state.auth.formErrors);

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful, reset]);

  useEffect(() => {
    if (typeof formErrors === 'object' && formErrors !== null)
      Object?.keys(formErrors).forEach((e) =>
        setError(e, { type: 'custom', message: formErrors[e] })
      );
  }, [formErrors, setError]);

  return { handleSubmit, reset };
};
