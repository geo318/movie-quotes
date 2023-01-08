import { useForm, FormProvider } from 'react-hook-form';
import { FormLayout } from 'components';
import { FormWrapperProps } from './types';
import { zodResolver } from '@hookform/resolvers/zod';

const FormWrapper: React.FC<FormWrapperProps> = ({
  children,
  className,
  schema,
}) => {
  return (
    <FormProvider
      {...useForm({ mode: 'onBlur', resolver: zodResolver(schema) })}
    >
      <FormLayout className={className}>{children}</FormLayout>
    </FormProvider>
  );
};

export default FormWrapper;
