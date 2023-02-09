import { FC } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { FormLayoutProps } from './types';
import { useFormLayout } from './useFormLayout';

const FormLayout: FC<FormLayoutProps> = ({ children, className, onSubmit }) => {
  const { handleSubmit } = useFormLayout();

  return (
    <form
      method='post'
      className={className}
      onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}
    >
      {children}
    </form>
  );
};

export default FormLayout;
