import { useForm, FormProvider } from 'react-hook-form';
import { Props } from 'types';
import { FormLayout } from 'components';

const FormWrapper: React.FC<Props> = ({ children, className }) => {
  return (
    <FormProvider {...useForm({ mode: 'onBlur' })}>
      <FormLayout className={className}>{children}</FormLayout>
    </FormProvider>
  );
};

export default FormWrapper;
