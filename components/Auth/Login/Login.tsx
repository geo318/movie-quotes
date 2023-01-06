import { InputText, Button, Modal, FormWrapper } from 'components';
import { Heading } from 'components/shared/Heading';
import Link from 'next/link';

const Login = () => {
  return (
    <Modal className='px-28 py-[3.25rem]' close>
      <FormWrapper className='mx-2 max-w-sm'>
        <Heading
          heading='Log in to your account'
          sub='Welcome back! Please enter your details.'
        />
        <InputText name='email' label='Email' placeholder='Enter your email' />
        <InputText
          name='password'
          label='Password'
          placeholder='At least 8 & max.15 lower case characters'
        />
        <Button text='Sign in' style='buttonRed' className='w-full mt-2' />
        <Button text='Sign in with Google' className='w-full mt-4' />
        <div className='flex gap-1 mt-8 justify-center text-[#6C757D] leading-normal'>
          <span>Don&apos;t you have an account?</span>
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
