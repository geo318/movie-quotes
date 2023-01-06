import { InputText, Button, Modal, FormWrapper } from 'components';
import { useRegister } from './useRegister';

const Register = () => {
  const { handleModalState } = useRegister();
  return (
    <Modal handleModalState={handleModalState}>
      <FormWrapper>
        <InputText name='username' label='username' />
        <InputText name='email' label='username' />
        <InputText name='password' label='username' />
        <InputText name='repeat_password' label='username' />
        <Button text='submit' style='buttonRed' className='w-full' />
      </FormWrapper>
    </Modal>
  );
};

export default Register;
