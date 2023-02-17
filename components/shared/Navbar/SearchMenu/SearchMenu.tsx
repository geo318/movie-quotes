import { useSearchMenu } from './useSearchMenu';
import { Select } from 'components';

const SearchMenu = ({ className = '', movies = false }) => {
  const { menu, aside, close } = useSearchMenu(movies);
  return (
    <Select
      face={menu}
      className={`mr-5 ${className}`}
      modalClassName='absolute py-3 rounded-md mt-6 bg-black -ml-5 w-32'
      closeOnClick={false}
      closeRef={close}
    >
      {aside}
    </Select>
  );
};
export default SearchMenu;
