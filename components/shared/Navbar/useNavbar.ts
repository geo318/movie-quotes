import { useTranslation } from 'next-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { authActions, InitialAuthState } from 'store';

export const useNavbar = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation('shared');

  const { isRegisterModalOpen, isLoginModalOpen } =
    useSelector<InitialAuthState>(
      (state: { [key: string]: string | boolean }) => state.auth
    ) as InitialAuthState;

  const openRegister = () => {
    dispatch(authActions.openRegister());
  };
  return { t, openRegister, isRegisterModalOpen, isLoginModalOpen };
};
