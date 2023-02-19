import { useEffect, useState } from 'react';
import { addEmail } from 'services';

export const useInput = (
  checkFormState = (state = false) => {},
  cancel = false
) => {
  const [loading, setIsLoading] = useState(false);
  const [readOnly, setReadOnly] = useState(true);

  const handleReadOnly = () => {
    checkFormState(true);
    setReadOnly((b) => !b);
  };

  useEffect(() => {
    setReadOnly(() => !cancel);
  }, [cancel]);

  const addEmailHandler = async (email: { email: string }) => {
    try {
      setIsLoading(true);
      await addEmail(email);
    } catch (e: any) {
      console.log(e);
    }
    setIsLoading(false);
  };

  return { readOnly, handleReadOnly, addEmailHandler };
};
