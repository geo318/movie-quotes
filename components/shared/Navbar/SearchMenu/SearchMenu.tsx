import { useSearchMenu } from './useSearchMenu';
import { ArrowBack, Divider, Magnifier, Search, Select } from 'components';

const SearchMenu = ({ className = '', movies = false }) => {
  const { close, t } = useSearchMenu();
  return (
    <Select
      face={<Magnifier menu />}
      className={`mr-5 ${className}`}
      modalClassName='absolute py-3 rounded-md mt-6 bg-black -ml-5 w-32'
      closeOnClick={false}
      closeRef={close}
    >
      <div className='fixed top-0 inset-x-0 m-0 z-50 bg-app-black-dark px-8 py-5 h-[70vh] rounded-b-xl'>
        <div className='flex gap-6 justify-center items-center'>
          <div ref={close}>
            <ArrowBack big />
          </div>
          <Search className='flex w-full flex-col' />
        </div>
        <>
          <Divider className='mt-5 -ml-8 -mr-8' />
          <div className='flex flex-col justify-center gap-6 mt-7 ml-10 '>
            {movies ? (
              <p className='text-app-dark-gray text-base'>
                {t('searchMovies')}
              </p>
            ) : (
              <>
                <p className='text-app-dark-gray text-base'>
                  {t('enterToSearch@')},
                </p>
                <p className='text-app-dark-gray text-base'>
                  {t('enterToSearch#')}
                </p>
              </>
            )}
          </div>
        </>
      </div>
    </Select>
  );
};
export default SearchMenu;
