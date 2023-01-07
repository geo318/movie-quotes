import { InputText, Button, Modal, FormWrapper, ArrowBack } from 'components';
import { Heading } from 'components/shared/Heading';
import Link from 'next/link';

const ForgotPassword = () => {
  return (
    <Modal className='px-28 py-[3.25rem]' close>
      <FormWrapper className='mx-2 max-w-sm'>
        <Heading
          className='text-center'
          heading='Forgot password?'
          sub='Enter the email and we’ll send an email with
          instructions to reset your password'
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
