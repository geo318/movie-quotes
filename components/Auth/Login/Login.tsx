import { FC } from 'react';
import Link from 'next/link';
import {
  InputText,
  Button,
  Modal,
  FormWrapper,
  Checkbox,
  Heading,
} from 'components';
import { useLogin } from './useLogin';

const Login: FC = () => {
  const { schema, handleUserLogin } = useLogin();
  return (
    <Modal className='px-28 py-[3.25rem]' close>
      <FormWrapper
        className='mx-2 max-w-sm'
        schema={schema}
        onSubmit={handleUserLogin}
      >
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
        <Button text='Sign in with Google' className='w-full mt-4' />
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
