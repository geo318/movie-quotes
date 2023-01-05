import { Portal, InputText, Button } from 'components';
import { useForm, FormProvider } from 'react-hook-form';

const Register = () => {
  return (
    <div className='bg-yellow-400 flex h-screen'>
      <span className='text-7xl'>გიორგი</span>
      <Portal className='flex items-center justify-center h-full'>
        <div className='w-[600px] h-[800px] bg-[#222030] rounded-[0.625rem]'>
          <FormProvider {...useForm({ mode: 'onBlur' })}>
            <form action='' className=' mx-32'>
              <InputText name='username' label='username' />
              <InputText name='email' label='username' />
              <InputText name='password' label='username' />
              <InputText name='repeat_password' label='username' />
              <Button text='submit' style='buttonRed' className='w-full' />
            </form>
          </FormProvider>
        </div>
      </Portal>
    </div>
  );
};

export default Register;
