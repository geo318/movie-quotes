import { useForm, useFormContext } from 'react-hook-form';
import { Props } from 'types';
import { useFormLayout } from './useFormLayout';

const FormLayout: React.FC<Props> = ({ children, className }) => {
  const { handleSubmit, onSubmitForm } = useFormLayout();

  return (
    <form
      action=''
      className={`mx-32 ${className}`}
      onSubmit={handleSubmit(onSubmitForm)}
    >
      {children}
    </form>
  );
};

export default FormLayout;
