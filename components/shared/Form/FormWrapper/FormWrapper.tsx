import { zodResolver } from '@hookform/resolvers/zod';
import { FormLayout } from 'components';
import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FormWrapperProps } from './types';

const FormWrapper: FC<FormWrapperProps> = ({
  children,
  className = '',
  schema,
  onSubmit,
  fill = false,
  ref = null,
}) => {
  return (
    <FormProvider
      {...useForm({ mode: 'onBlur', resolver: zodResolver(schema) })}
    >
      <FormLayout
        className={`${fill ? 'w-full' : 'mx-2 lg:max-w-sm'} ${className}`}
        onSubmit={onSubmit}
        ref={ref}
      >
        {children}
      </FormLayout>
    </FormProvider>
  );
};

export default FormWrapper;
