import {
  InputText,
  Button,
  Modal,
  FormWrapper,
  Heading,
  ModalLoadingOverlay,
} from 'components';
import Link from 'next/link';
import { FC } from 'react';
import { useRegister } from './useRegister';

const Register: FC = () => {
  const { isLoading, schema, onSubmit } = useRegister();
  return (
    <Modal className='px-28 py-[3.25rem] relative' close>
      <FormWrapper
        className='mx-2 max-w-sm'
        schema={schema}
        onSubmit={onSubmit}
      >
        {isLoading && <ModalLoadingOverlay />}

        <Heading heading='Create an account' sub='Start your journey!' />
        <InputText
          name='username'
          label='Name'
          placeholder='At least 3 & max.15 lower case characters'
        />
        <InputText name='email' label='Email' placeholder='Enter your email' />
        <InputText
          name='password'
          label='Password'
          type='password'
          placeholder='At least 8 & max.15 lower case characters'
        />
        <InputText
          name='repeat_password'
          label='Confirm password'
          type='password'
          placeholder='Confirm password'
        />
        <Button
          text='Get started'
          style='buttonRed'
          className='w-full mt-2'
          disabled={isLoading}
        />
        <Button text='Sign up with Google' className='w-full mt-4' />
        <div className='flex gap-1 mt-8 justify-center text-app-dark-gray leading-normal'>
          <span>Already have an account?</span>
          <Link href='/?login' as='/login' className='text-app-link underline'>
            Log in
          </Link>
        </div>
      </FormWrapper>
    </Modal>
  );
};

export default Register;
