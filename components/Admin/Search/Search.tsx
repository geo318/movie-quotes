import { Magnifier } from 'components';
import { useSearch } from './useSearch';

const Search = ({ className = '', active = false, full = false }) => {
  const { handleSearch, isMobile, t } = useSearch();
  return (
    <div className={`lg:float-right py-1 ${className}`}>
      <div className='lg:ml-6'>
        <div className='flex lg:gap-4 gap-6 items-center lg:shadow-bottom'>
          {!isMobile && <Magnifier />}
          <input
            type='text'
            name='search'
            onChange={handleSearch}
            placeholder={`${active ? t('enterToSearch') : t('searchBy')}`}
            className={`outline-none bg-transparent border-0 text-[#CED4DA] text-xl px-0 py-1 ${
              active || isMobile || full ? 'w-full' : 'w-24'
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
