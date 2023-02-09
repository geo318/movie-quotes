import { FormWrapper, InputText } from 'components';
import { useAddComment } from './useAddComment';

const AddComment = ({ quoteId }: { quoteId: number }) => {
  const { schema, onSubmit, authUser } = useAddComment();
  return (
    <FormWrapper fill onSubmit={onSubmit} schema={schema}>
      <InputText name='quote_id' type='hidden' value={quoteId} />
      <InputText name='user_id' type='hidden' value={authUser.id} />
      <InputText
        name='comment'
        placeholder='Write a comment'
        inputStyle='border-0 min-w-full text-xl leading-[2rem] !text-[#CED4DA] rounded-[0.625rem] !bg-[#24222F] bg-opacity-60 !py-3 px-7'
        submit
      />
      <button type='submit' className='hidden' />
    </FormWrapper>
  );
};

export default AddComment;
