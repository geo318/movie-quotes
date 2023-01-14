import {
  ArrowBack,
  Button,
  FormWrapper,
  Heading,
  InputText,
  Modal,
  ModalLoadingOverlay,
} from 'components';
import Link from 'next/link';
import { FC } from 'react';

import { useForgotPassword } from './useForgotPassword';

const ForgotPassword: FC = () => {
  const { onSubmit, schema, isLoading } = useForgotPassword();
  return (
    <Modal className='px-28 py-[3.25rem]' close>
      <FormWrapper
        className='mx-2 max-w-sm'
        schema={schema}
        onSubmit={onSubmit}
      >
        {isLoading && <ModalLoadingOverlay />}
        <Heading
          className='text-center'
          heading='Forgot password?'
          sub='Enter the email and we’ll send an email with instructions to reset your password'
        />
        <InputText name='email' label='Email' placeholder='Enter your email' />
        <Button text='Send instructions' style='buttonRed' className='w-full' />
        <div className='flex gap-3 mt-10 justify-center items-center text-app-dark-gray leading-normal'>
          <ArrowBack />
          <Link href='/?login'>Back to log in</Link>
        </div>
      </FormWrapper>
    </Modal>
  );
};

export default ForgotPassword;
