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
  const { schema, handleUserLogin, t } = useLogin();
  return (
    <Modal>
      <FormWrapper schema={schema} onSubmit={handleUserLogin}>
        <Heading
          heading={t('login_heading') as string}
          sub={t('login_sub') as string}
        />
        <InputText
          name='email'
          label={t('email') as string}
          placeholder={t('email_holder') as string}
        />
        <InputText
          name='password'
          type='password'
          label={t('password') as string}
          placeholder={t('password') as string}
        />
        <Checkbox
          name='remember_me'
          label={t('remember') as string}
          className='mb-4 flex'
        >
          <Link
            href='/?forgot-password'
            as='/forgot-password'
            className='text-app-link underline ml-auto'
          >
            {t('password_reset')}
          </Link>
        </Checkbox>
        <Button text={t('sign')} style='buttonRed' className='w-full' />
        <GmailAuth text={t('sign_in_google') as string} />
        <div className='flex gap-1 mt-8 justify-center text-app-dark-gray leading-normal'>
          <span>{t('no_account')}</span>
          <Link
            href='/?register'
            as='/register'
            className='text-app-link underline'
          >
            {t('sing_up')}
          </Link>
        </div>
      </FormWrapper>
    </Modal>
  );
};

export default Login;
