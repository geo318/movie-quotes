import { useAuthUser } from 'hooks';
import { useEffect, useState } from 'react';
import { addEmail, setEmailAsPrimary } from 'services';

export const useInput = (
  checkFormState = (state = false) => {},
  cancel = false
) => {
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
    try {
      const x = await setEmailAsPrimary(email, user.id);
      console.log(x);
    } catch (e: any) {
      console.log(e);
    }
  };

  const verifyEmail = async (email: { email: string }) => {
    try {
      await addEmail(email);
    } catch {}
  };

  return { readOnly, handleReadOnly, setPrimaryEmail, verifyEmail };
};
