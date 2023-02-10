import { useBurgerMenu } from './useBurgerMenu';
import { Select } from 'components';
const BurgerMenu = ({ className = '' }) => {
  const { menu, aside } = useBurgerMenu();
  return (
    <Select
      face={menu}
      className={`mr-5 ${className}`}
      modalClassName='absolute py-3 rounded-md mt-6 bg-black -ml-5 w-32'
    >
      {aside}
    </Select>
  );
};
export default BurgerMenu;
