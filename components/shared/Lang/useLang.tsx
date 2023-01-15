import { Arrow } from 'components/icons';
import { localStore } from 'helpers';
import Link from 'next/link';
import Router from 'next/router';
import { useEffect } from 'react';

export const useLang = () => {
  const lang = localStore.get('locale');

  useEffect(() => {
    if (Router.locales!.some((loc) => !window.location.pathname.includes(loc)))
      Router.replace(lang);
  }, [lang]);

  const selector = (
    <div className='flex gap-3 items-center justify-center p-2 cursor-pointer select-none'>
      {Router.locale === 'en' ? 'Eng' : 'ქარ'}
      <Arrow />
    </div>
  );

  const dropdown = (
    <>
      {Router.locales!.map(
        (lang) =>
          Router.locale !== lang && (
            <Link
              key={lang}
              href=''
              locale={lang}
              onClick={() => localStore.set('locale', lang)}
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
