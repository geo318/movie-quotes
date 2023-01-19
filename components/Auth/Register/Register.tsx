import {
  Button,
  FormWrapper,
  GmailAuth,
  Heading,
  InputText,
  Modal,
  ModalLoadingOverlay,
  useRegister,
} from 'components';
import Link from 'next/link';
import { FC } from 'react';

const Register: FC = () => {
  const { isLoading, schema, onSubmit, t } = useRegister();
  return (
    <Modal>
      <FormWrapper schema={schema} onSubmit={onSubmit}>
        {isLoading && <ModalLoadingOverlay />}

        <Heading heading={t('register_heading')} sub={t('register_sub')} />
        <InputText
          name='username'
          label={t('name') as string}
          placeholder={t('username_holder') as string}
        />
        <InputText
          name='email'
          label={t('email') as string}
          placeholder={t('email_holder') as string}
        />
        <InputText
          name='password'
          label={t('password') as string}
          type='password'
          placeholder={t('password_holder') as string}
        />
        <InputText
          name='repeat_password'
          label={t('repeat') as string}
          type='password'
          placeholder={t('repeat') as string}
        />
        <Button
          text={t('get_started') as string}
          style='buttonRed'
          className='w-full mt-2'
          disabled={isLoading}
        />
        <GmailAuth text={t('sign_up_google') as string} />
        <div className='flex gap-1 mt-8 justify-center text-app-dark-gray leading-normal'>
          <span>{t('have_account')}</span>
          <Link href='/?login' as='/login' className='text-app-link underline'>
            {t('login')}
          </Link>
        </div>
      </FormWrapper>
    </Modal>
  );
};

export default Register;
