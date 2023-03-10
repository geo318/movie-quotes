import { FormWrapper, InputText } from 'components';
import { useAddComment } from './useAddComment';

const AddComment = ({ quoteId }: { quoteId: number }) => {
  const { schema, onSubmit, authUser, t } = useAddComment();
  return (
    <FormWrapper fill onSubmit={onSubmit} schema={schema}>
      <InputText name='quote_id' type='hidden' value={quoteId} />
      <InputText name='user_id' type='hidden' value={authUser?.id} />
      <InputText
        name='comment'
        placeholder={t('writeComment') as string}
        inputStyle='!border-0 min-w-full lg:text-xl leading-[2rem] !text-[#CED4DA] rounded-ten !bg-[#24222F] bg-opacity-60 lg:py-3 px-7'
        submit
      />
      <button type='submit' className='hidden' />
    </FormWrapper>
  );
};

export default AddComment;
