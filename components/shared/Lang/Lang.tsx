import { Select, useLang } from 'components';

const Lang = ({ className = '', aside = false }) => {
  const { selector, dropdown } = useLang();
  return (
    <>
      {!aside ? (
        <Select
          face={selector}
          className={`mr-5 ${className}`}
          modalClassName='absolute py-3 rounded-md mt-6 bg-black -ml-5 w-32'
        >
          {dropdown}
        </Select>
      ) : (
        <div
          className={`${className} inline-flex border border-gray rounded-[.25rem] mt-5`}
        >
          {dropdown}
        </div>
      )}
    </>
  );
};

export default Lang;
