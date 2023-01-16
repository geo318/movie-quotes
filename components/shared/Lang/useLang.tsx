import { Arrow } from 'components/icons';
import { localStore } from 'helpers';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const useLang = () => {
  const router = useRouter();

  const selector = (
    <div className='flex gap-3 items-center justify-center p-2 cursor-pointer select-none'>
      {router.locale === 'en' ? 'Eng' : 'ქარ'}
      <Arrow />
    </div>
  );

  const dropdown = (
    <>
      {router.locales!.map(
        (lang) =>
          router.locale !== lang && (
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
