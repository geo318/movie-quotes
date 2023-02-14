import { Bin, Dots, Eye, Pen, Select, ViewQuote } from 'components';
import Link from 'next/link';
import { FC } from 'react';
import { QuoteMenuProps } from './type';
import { useQuoteMenu } from './useQuoteMenu';

const QuoteMenu: FC<QuoteMenuProps> = ({ quote, id, handleDelete }) => {
  const { isActive } = useQuoteMenu();
  return (
    <>
      {isActive('view-quote') && <ViewQuote quote={quote} />}
      <Select face={<Dots />}>
        <div className='absolute'>
          <ul className='flex flex-col gap-8 bg-[#24222F] px-10 py-8 rounded-ten lg:w-[15rem] text-base'>
            <li>
              <Link href={`${id}?view-quote`}>
                <div className='flex items-center gap-4'>
                  <Eye big />
                  View Quote
                </div>
              </Link>
            </li>
            <li className='flex items-center gap-4 cursor-pointer'>
              <Pen />
              Edit
            </li>
            <li
              className='flex items-center gap-4 cursor-pointer'
              onClick={() => handleDelete(quote.id)}
            >
              <Bin />
              Delete
            </li>
          </ul>
        </div>
      </Select>
    </>
  );
};

export default QuoteMenu;
