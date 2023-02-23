import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { authActions } from 'store';
import { RootState } from 'types';

export const useFormLayout = () => {
  const {
    handleSubmit,
    setError,
    reset,
    formState: { isSubmitSuccessful },
  } = useFormContext();
  const formErrors = useSelector((state: RootState) => state.auth.formErrors);
  const dispatch = useDispatch();

  useEffect(() => {
    isSubmitSuccessful && reset();
    return () => {
      dispatch(authActions.clearFormError());
      reset();
    };
  }, [isSubmitSuccessful, reset, dispatch]);

  useEffect(() => {
    if (typeof formErrors === 'object' && formErrors !== null)
      Object?.keys(formErrors).forEach((e) =>
        setError(e, { type: 'custom', message: formErrors[e] })
      );
  }, [formErrors, setError]);

  return { handleSubmit, reset };
};
