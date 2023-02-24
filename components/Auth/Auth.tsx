import {
  CheckEmail,
  CheckPasswordEmail,
  ConfirmEmail,
  ConfirmPassword,
  ConfirmPasswordEmail,
  ForgotPassword,
  Login,
  OAuth,
  Register,
} from 'components';
import { FC } from 'react';
import { useAuth } from './useAuth';

const Auth: FC = () => {
  const { isActive, isEmailSent, isEmailVerified } = useAuth();
  return (
    <>
      {isActive('register') && <Register />}
      {isActive('login') && <Login />}
      {isActive('forgot-password') && <ForgotPassword />}
      {isActive('reset-password') && <ConfirmPassword />}
      {isActive('check-email') && <CheckEmail />}
      {isActive('check-password-email') && <CheckPasswordEmail />}
      {isActive('confirm-email') && <ConfirmEmail />}
      {isActive('reset-success') && <ConfirmPasswordEmail />}
      {isActive('state') && <OAuth />}
    </>
  );
};

export default Auth;
