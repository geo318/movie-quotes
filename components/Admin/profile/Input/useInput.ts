import { useAuthUser } from 'hooks';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmail, removeEmail, setEmailAsPrimary } from 'services';
import { flashActions } from 'store';

export const useInput = (
  checkFormState = (state: boolean) => {},
  refetch = () => {},
  cancel = false,
  verified = false
) => {
  const dispatch = useDispatch();
  const [readOnly, setReadOnly] = useState(true);
  const user = useAuthUser();
  const handleReadOnly = () => {
    checkFormState(true);
    setReadOnly((b) => !b);
  };

  useEffect(() => {
    setReadOnly(() => !cancel);
  }, [cancel]);

  const setPrimaryEmail = async ({ email }: { email: string }) => {
    const flashMessage = verified
      ? 'Email set as Primary'
      : 'Please check email to verify new address';
    dispatch(flashActions.toggleIsLoading());
    try {
      await setEmailAsPrimary(email, user.id);
      refetch();
      dispatch(flashActions.setFlashMessage(flashMessage));
    } catch {}
    dispatch(flashActions.toggleIsLoading());
  };

  const verifyEmail = async (email: { email: string }) => {
    const flashMessage = `New primary email - ${email}`;
    try {
      await addEmail(email);
      dispatch(flashActions.setFlashMessage(flashMessage));
    } catch {}
  };

  const handleRemove = async (email: string) => {
    const flashMessage = `Email removed - ${email}`;
    dispatch(flashActions.toggleIsLoading());
    try {
      await removeEmail(email);
      refetch();
      dispatch(flashActions.setFlashMessage(flashMessage));
    } catch {}
    dispatch(flashActions.toggleIsLoading());
  };

  return {
    readOnly,
    handleReadOnly,
    setPrimaryEmail,
    verifyEmail,
    handleRemove,
  };
};
