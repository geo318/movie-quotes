import { FormWrapper, InputText, Magnifier } from 'components';
import { FC } from 'react';
import { Props } from 'types';
import { useSearch } from './useSearch';

const Search: FC<Props & { active: boolean }> = ({ className, active }) => {
  const { onSubmit, schema, t } = useSearch();
  return (
    <div className={`float-right py-1 ${className}`}>
      <div className='ml-6'>
        <FormWrapper fill onSubmit={onSubmit} schema={schema}>
          <div className='flex gap-4 items-center shadow-bottom'>
            <Magnifier />
            <InputText
              submit
              name='search'
              placeholder={`${active ? t('enterToSearch') : t('searchBy')}`}
              className='!mb-0 !py-1 w-full'
              inputStyle={`!bg-transparent border-0 !text-[#CED4DA] !text-xl !px-0 !py-1 ${
                active ? 'w-full' : 'w-24'
              }`}
            />
          </div>
        </FormWrapper>
      </div>
    </div>
  );
};

export default Search;
