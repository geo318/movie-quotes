import {
  ArrowBack,
  Button,
  FormWrapper,
  Heading,
  InputText,
  Modal,
  useConfirmPassword,
} from 'components';
import Link from 'next/link';
import { FC } from 'react';

const ConfirmPassword: FC = () => {
  const { schema } = useConfirmPassword();
  return (
    <Modal className='px-28 py-[3.25rem]' close>
      <FormWrapper className='mx-2 max-w-sm' schema={schema}>
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
