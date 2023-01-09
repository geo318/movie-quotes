import { FC } from 'react';
import {
  ConfirmPassword,
  ForgotPassword,
  Login,
  Register,
  CheckEmail,
  CheckPasswordEmail,
  ConfirmEmail,
  ConfirmPasswordEmail,
} from 'components';
import { useAuth } from './useAuth';

const Auth: FC = () => {
  const { isActive } = useAuth();
  return (
    <>
      {isActive('register') && <Register />}
      {isActive('login') && <Login />}
      {isActive('forgot-password') && <ForgotPassword />}
      {isActive('confirm-password') && <ConfirmPassword />}
      {isActive('check-email') && <CheckEmail />}
      {isActive('check-password-email') && <CheckPasswordEmail />}
      {isActive('confirm-email') && <ConfirmEmail />}
      {isActive('confirm-password-email') && <ConfirmPasswordEmail />}
    </>
  );
};

export default Auth;
