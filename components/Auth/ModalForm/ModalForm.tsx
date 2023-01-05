import { useForm, FormProvider } from 'react-hook-form';
import { Props } from 'types';

const ModalForm: React.FC<Props> = ({ children, className }) => (
  <FormProvider {...useForm({ mode: 'onBlur' })}>
    <form action='' className={`mx-32 ${className}`}>
      {children}
    </form>
  </FormProvider>
);

export default ModalForm;
