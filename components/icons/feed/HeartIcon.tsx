const HeartIcon = ({
  active = false,
  full = false,
  className = '',
}: {
  active?: boolean;
  full?: boolean;
  className?: string;
}) => (
  <>
    {full ? (
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
      >
        <g clipPath='url(#clip0_638_29966)'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M11.9999 1.97108C18.6569 -4.87192 35.3009 7.10258 11.9999 22.5001C-11.3011 7.10408 5.34292 -4.87192 11.9999 1.97108Z'
            fill='#F3426C'
          />
        </g>
        <defs>
          <clipPath id='clip0_638_29966'>
            <rect width='24' height='24' fill='white' />
          </clipPath>
        </defs>
      </svg>
    ) : (
      <svg
        width='32'
        height='32'
        viewBox='0 0 32 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
      >
        <g clipPath='url(#clip0_13203_20114)'>
          <path
            d='M15.9998 5.4961L14.5658 4.0221C11.1998 0.562097 5.02779 1.7561 2.79979 6.1061C1.75379 8.1521 1.51779 11.1061 3.42779 14.8761C5.26779 18.5061 9.09579 22.8541 15.9998 27.5901C22.9038 22.8541 26.7298 18.5061 28.5718 14.8761C30.4818 11.1041 30.2478 8.1521 29.1998 6.1061C26.9718 1.7561 20.7998 0.560097 17.4338 4.0201L15.9998 5.4961ZM15.9998 30.0001C-14.6662 9.7361 6.55779 -6.0799 15.6478 2.2861C15.7678 2.3961 15.8858 2.5101 15.9998 2.6281C16.1126 2.5102 16.2301 2.39678 16.3518 2.2881C25.4398 -6.0839 46.6658 9.7341 15.9998 30.0001Z'
            fill={active ? '#F3426C' : 'white'}
          />
        </g>
        <defs>
          <clipPath id='clip0_13203_20114'>
            <rect width='32' height='32' fill='none' />
          </clipPath>
        </defs>
      </svg>
    )}
  </>
);

export default HeartIcon;
