import {
  Button,
  Checkbox,
  FormWrapper,
  GmailAuth,
  Heading,
  InputText,
  Modal,
} from 'components';
import Link from 'next/link';
import { FC } from 'react';

import { useLogin } from './useLogin';

const Login: FC = () => {
  const { schema, handleUserLogin } = useLogin();
  return (
    <Modal>
      <FormWrapper schema={schema} onSubmit={handleUserLogin}>
        <Heading
          heading='Log in to your account'
          sub='Welcome back! Please enter your details.'
        />
        <InputText name='email' label='Email' placeholder='Enter your email' />
        <InputText
          name='password'
          type='password'
          label='Password'
          placeholder='password'
        />
        <Checkbox name='remember_me' label='Remember me' className='mb-4 flex'>
          <Link
            href='/?forgot-password'
            as='/forgot-password'
            className='text-app-link underline ml-auto'
          >
            Password Reset
          </Link>
        </Checkbox>
        <Button text='Sign in' style='buttonRed' className='w-full' />
        <GmailAuth />
        <div className='flex gap-1 mt-8 justify-center text-app-dark-gray leading-normal'>
          <span>Don’t have an account?</span>
          <Link
            href='/?register'
            as='/register'
            className='text-app-link underline'
          >
            Sign up
          </Link>
        </div>
      </FormWrapper>
    </Modal>
  );
};

export default Login;
