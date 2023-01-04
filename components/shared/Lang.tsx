import { Select } from '.';
import { useRouter } from 'next/router';
import { Arrow } from 'components/icons';
import Link from 'next/link';

const Lang = () => {
  const { locale, locales } = useRouter();
  const selector = (
    <div className='flex gap-3 items-center justify-center p-2 cursor-pointer select-none'>
      {locale === 'en' ? 'Eng' : 'ქარ'}
      <Arrow />
    </div>
  );
  return (
    <Select
      face={selector}
      className='mr-5'
      modalClassName='absolute bg-white text-black py-3 rounded-md mt-4 -ml-5 w-32'
    >
      {locales!.map(
        (lang) =>
          locale !== lang && (
            <Link
              key={lang}
              href=''
              locale={lang}
              className='hover:bg-slate-100 px-5 py-2 flex justify-center'
            >
              {lang === 'en' ? 'English' : 'ქართული'}
            </Link>
          )
      )}
    </Select>
  );
};

export default Lang;
