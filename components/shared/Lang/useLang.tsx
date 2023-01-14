import { Arrow } from 'components/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { changeLang } from 'services';

export const useLang = () => {
  const { locale, locales } = useRouter();

  useEffect(() => {
    (async () => {
      await changeLang(locale as string);
    })();
  }, [locale]);

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
              // onClick={onChangeLanguage}
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
