import { FC } from 'react';
import { Props } from 'types';
import { useFormLayout } from './useFormLayout';

const FormLayout: FC<Props> = ({ children, className }) => {
  const { handleSubmit, onSubmitForm } = useFormLayout();

  return (
    <form action='' className={className} onSubmit={handleSubmit(onSubmitForm)}>
      {children}
    </form>
  );
};

export default FormLayout;
