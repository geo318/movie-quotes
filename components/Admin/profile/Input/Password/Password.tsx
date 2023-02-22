import { InputReadOnly, InputText } from 'components';
import { usePassword } from './usePassword';

const Password = () => {
  const { isLengthCorrect, isLowerCase, isMobile, t } = usePassword();
  return (
    <div className='flex flex-col w-full max-w-[33rem] gap-6 mt-6'>
      {!isMobile && (
        <InputReadOnly label='Password' value='123456789012' password />
      )}
      <div className='p-6 mb-6 border border-app-gray border-opacity-20 rounded-four'>
        <h5 className='text-base'>Passwords should contain:</h5>
        <div className='mt-4 flex flex-col gap-1 text-sm'>
          <p
            className={`relative before:content-[""] before:h-1 before:w-1 ${
              !isLengthCorrect
                ? 'before:bg-app-gray-text text-app-gray-text'
                : 'before:bg-app-green text-white'
            } before:absolute before:left-0 before:top-2 before:rounded-full pl-3`}
          >
            8 or more characters
          </p>
          <p
            className={`relative before:content-[""] before:h-1 before:w-1 ${
              !isLowerCase
                ? 'before:bg-app-gray-text text-app-gray-text'
                : 'before:bg-app-green text-white'
            } before:absolute before:left-0 before:top-2 before:rounded-full pl-3`}
          >
            15 lowercase characters
          </p>
        </div>
      </div>
      <InputText
        name='password'
        label={t('newPassword') as string}
        type='password'
        placeholder={t('password_holder') as string}
        asterisk={false}
      />
      <InputText
        name='repeat_password'
        label={t('confirmNewPassword') as string}
        type='password'
        placeholder={t('repeat') as string}
        asterisk={false}
      />
    </div>
  );
};

export default Password;
