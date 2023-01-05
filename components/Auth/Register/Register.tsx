import { InputText, Button, Modal } from 'components';
import { ModalForm } from '../ModalForm';
import { useRegister } from './useRegister';

const Register = () => {
  const { handleModalState } = useRegister();
  return (
    <Modal handleModalState={handleModalState}>
      <ModalForm>
        <InputText name='username' label='username' />
        <InputText name='email' label='username' />
        <InputText name='password' label='username' />
        <InputText name='repeat_password' label='username' />
        <Button text='submit' style='buttonRed' className='w-full' />
      </ModalForm>
    </Modal>
  );
};

export default Register;
