import {
  InputText,
  Button,
  Modal,
  FormWrapper,
  ArrowBack,
  Heading,
} from 'components';
import Link from 'next/link';

const ConfirmPassword = () => {
  return (
    <Modal className='px-28 py-[3.25rem]' close>
      <FormWrapper className='mx-2 max-w-sm'>
        <Heading
          className='text-center'
          heading='Create new password'
          sub='Your new password must be different from previous used passwords'
        />
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
        <Button text='Reset password' style='buttonRed' className='w-full' />
        <div className='flex gap-3 mt-10 justify-center items-center text-app-dark-gray leading-normal'>
          <ArrowBack />
          <Link href='/?login'>Back to log in</Link>
        </div>
      </FormWrapper>
    </Modal>
  );
};

export default ConfirmPassword;
