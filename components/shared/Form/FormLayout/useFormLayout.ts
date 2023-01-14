import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

export const useFormLayout = () => {
  const { handleSubmit, setError } = useFormContext();
  const formErrors = useSelector((state: RootState) => state.auth.formErrors);

  useEffect(() => {
    Object.keys(formErrors).forEach((e) =>
      setError(e, { type: 'custom', message: formErrors[e] })
    );
  }, [formErrors, setError]);

  return { handleSubmit };
};
