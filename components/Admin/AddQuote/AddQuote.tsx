import { Pencil } from 'components';
import Link from 'next/link';
import { FC } from 'react';
import { Props } from 'types';
import { AddQuoteModal } from './AddQuoteModal';
import { useAddQuote } from './useAddQuote';

const AddQuote: FC<Props> = ({ className }) => {
  const { isActive, t } = useAddQuote();
  return (
    <div
      className={`lg:px-4 py-3 xl:bg-app-bg bg-opacity-[.6] rounded-lg ${className}`}
    >
      {isActive('add-new-quote') && <AddQuoteModal />}
      <Link href='?add-new-quote'>
        <div className='flex gap-4 items-center'>
          <Pencil />
          <p>{t('writeAQuote')}</p>
        </div>
      </Link>
    </div>
  );
};

export default AddQuote;
