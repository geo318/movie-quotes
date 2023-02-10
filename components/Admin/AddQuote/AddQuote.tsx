import { Pencil } from 'components/icons';
import Link from 'next/link';
import { FC } from 'react';
import { Props } from 'types';
import { AddQuoteModal } from './AddQuoteModal';
import { useAddQuote } from './useAddQuote';

const AddQuote: FC<Props> = ({ className }) => {
  const { isActive } = useAddQuote();
  return (
    <div
      className={`lg:px-4 py-3 xl:bg-app-bg bg-opacity-[.6] rounded-lg ${className}`}
    >
      {isActive('add-quote') && <AddQuoteModal />}
      <Link href='?add-quote'>
        <div className='flex gap-4 items-center'>
          <Pencil />
          <p>Write a new quote</p>
        </div>
      </Link>
    </div>
  );
};

export default AddQuote;
