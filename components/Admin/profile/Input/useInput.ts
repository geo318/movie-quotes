import { useAuthUser, useScreenWidth } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addEmail, removeEmail, setEmailAsPrimary } from 'services';
import { flashActions } from 'store';
import { profileActions } from 'store/profileSlice';
import { ProfileSubmitProps, RootState } from 'types';

export const useInput = ({
  refetch = () => {},
  verified = false,
  name = '',
}) => {
  const isMobile = useScreenWidth();
  const dispatch = useDispatch();
  const { t } = useTranslation('profile');
  const [readOnly, setReadOnly] = useState(true);
  const user = useAuthUser();
  const formState = useSelector((state: RootState) => state.profile.active);
  const { unregister } = useFormContext();

  useEffect(() => {
    if (formState) return;
    setReadOnly(true);
    unregister(name);
    if (name === 'password') unregister('repeat_password');
  }, [formState, unregister, name]);

  const handleFormState = (name: ProfileSubmitProps) => {
    setReadOnly((b) => !b);
    dispatch(profileActions.setFormActive());
  };

  const setPrimaryEmail = async ({ email }: { email: string }) => {
    const flashMessage = verified
      ? t('emailSetPrimary')
      : t('pleaseCheckEmail');
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
    handleFormState,
    setPrimaryEmail,
    verifyEmail,
    handleRemove,
    formState,
    isMobile,
    t,
  };
};
