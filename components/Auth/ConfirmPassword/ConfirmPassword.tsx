import {
  ArrowBack,
  Button,
  FormWrapper,
  Heading,
  InputText,
  Modal,
  ModalLoadingOverlay,
  useConfirmPassword,
} from 'components';
import Link from 'next/link';
import { FC } from 'react';

const ConfirmPassword: FC = () => {
  const { isLoading, onSubmit, schema, email, token, t } = useConfirmPassword();
  return (
    <Modal>
      <FormWrapper schema={schema} onSubmit={onSubmit}>
        {isLoading && <ModalLoadingOverlay />}
        <Heading
          className='text-center'
          heading={t('password_heading')}
          sub={t('password_sub')}
        />
        <InputText name='token' type='hidden' value={email} />
        <InputText name='email' type='hidden' value={token} />
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
          text={t('reset_password') as string}
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

export default ConfirmPassword;
