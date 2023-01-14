import { Arrow } from 'components/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const useLang = () => {
  const { locale, locales } = useRouter();
  const selector = (
    <div className='flex gap-3 items-center justify-center p-2 cursor-pointer select-none'>
      {locale === 'en' ? 'Eng' : 'ქარ'}
      <Arrow />
    </div>
  );
  const dropdown = (
    <>
      {locales!.map(
        (lang) =>
          locale !== lang && (
            <Link
              key={lang}
              href={`/${lang}`}
              locale={lang}
              className='hover:bg-slate-100 px-5 py-2 flex justify-center'
            >
              {lang === 'en' ? 'English' : 'ქართული'}
            </Link>
          )
      )}
    </>
  );
  return { selector, dropdown };
};
