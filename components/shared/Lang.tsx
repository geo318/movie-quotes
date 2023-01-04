import { Select } from '.';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Arrow } from 'components/icons';

const Lang = () => {
  const { locale, locales } = useRouter();
  return (
    <Select value={locale === 'en' ? 'Eng' : 'ქარ'} className='w-12 mr-5 '>
      {locales!.map(
        (lang) =>
          locale !== lang && (
            <Link key={lang} href='' locale={lang}>
              {lang === 'en' ? 'English' : 'ქართული'}
            </Link>
          )
      )}
    </Select>
  );
};

export default Lang;
