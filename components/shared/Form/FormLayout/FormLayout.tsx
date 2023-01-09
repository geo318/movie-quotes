import { FC } from 'react';
import { Props } from 'types';
import { useFormLayout } from './useFormLayout';

const FormLayout: FC<Props> = ({ children, className, onSubmit }) => {
  const { handleSubmit, onSubmitForm } = useFormLayout();

  return (
    <form
      action=''
      className={className}
      onSubmit={handleSubmit(onSubmit || onSubmitForm)}
    >
      {children}
    </form>
  );
};

export default FormLayout;
