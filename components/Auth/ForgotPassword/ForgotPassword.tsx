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
  const { onSubmit, schema, isLoading, t } = useForgotPassword();
  return (
    <Modal>
      <FormWrapper schema={schema} onSubmit={onSubmit}>
        {isLoading && <ModalLoadingOverlay />}
        <Heading
          className='text-center'
          heading={t('forgot_heading') as string}
          sub={t('forgot_sub') as string}
        />
        <InputText
          name='email'
          label={t('email') as string}
          placeholder={t('email_holder') as string}
        />
        <Button
          text={t('send_instructions') as string}
          style='buttonRed'
          className='w-full'
        />
        <div className='flex gap-3 mt-10 justify-center items-center text-app-dark-gray leading-normal'>
          <ArrowBack />
          <Link href='/?login'>{t('back_login')}</Link>
        </div>
      </FormWrapper>
    </Modal>
  );
};

export default ForgotPassword;
