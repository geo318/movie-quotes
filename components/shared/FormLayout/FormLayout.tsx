import { useFormContext } from 'react-hook-form';
import { Props } from 'types';

const FormLayout: React.FC<Props> = ({ children }) => {
  //   const { handleSubmit } = useFormContext();
  //   const { onSubmitForm } = useFormNavigation();
  //   useSetLocalStorage();

  return (
    <form
      //   onSubmit={handleSubmit!((data) => onSubmitForm(data))}
      className='flex flex-col w-full'
    >
      <div className='flex'>
        <div className='basis-1/2'>{children}</div>
      </div>
    </form>
  );
};

export default FormLayout;
