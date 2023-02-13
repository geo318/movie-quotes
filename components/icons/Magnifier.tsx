const Magnifier = ({ menu = false }) =>
  menu ? (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_15779_8998)'>
        <path
          d='M17.6134 15.5161C19.0658 13.5342 19.7163 11.0769 19.4348 8.63587C19.1533 6.19486 17.9605 3.95016 16.095 2.35085C14.2295 0.751532 11.829 -0.0844439 9.37362 0.0101658C6.91825 0.104776 4.58915 1.12299 2.85227 2.86111C1.1154 4.59923 0.098846 6.92907 0.00599324 9.3845C-0.0868595 11.8399 0.750834 14.2399 2.35148 16.1042C3.95213 17.9685 6.19769 19.1598 8.6389 19.4395C11.0801 19.7193 13.5369 19.067 15.5179 17.6131H15.5164C15.5614 17.6731 15.6094 17.7302 15.6634 17.7857L21.4384 23.5606C21.7196 23.8421 22.1012 24.0003 22.4991 24.0005C22.897 24.0006 23.2787 23.8427 23.5601 23.5614C23.8416 23.2801 23.9998 22.8986 23.9999 22.5007C24.0001 22.1028 23.8421 21.7211 23.5609 21.4397L17.7859 15.6646C17.7322 15.6104 17.6746 15.5602 17.6134 15.5147V15.5161ZM18.0004 9.75015C18.0004 10.8336 17.787 11.9064 17.3724 12.9073C16.9578 13.9082 16.3501 14.8177 15.584 15.5838C14.8179 16.3499 13.9084 16.9576 12.9075 17.3722C11.9066 17.7868 10.8338 18.0002 9.75037 18.0002C8.66696 18.0002 7.59417 17.7868 6.59323 17.3722C5.5923 16.9576 4.68282 16.3499 3.91674 15.5838C3.15066 14.8177 2.54297 13.9082 2.12836 12.9073C1.71376 11.9064 1.50037 10.8336 1.50037 9.75015C1.50037 7.56211 2.36956 5.4637 3.91674 3.91652C5.46391 2.36935 7.56233 1.50015 9.75037 1.50015C11.9384 1.50015 14.0368 2.36935 15.584 3.91652C17.1312 5.4637 18.0004 7.56211 18.0004 9.75015Z'
          fill='white'
        />
      </g>
      <defs>
        <clipPath id='clip0_15779_8998'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  ) : (
    <svg
      className='min-w-[1.25rem]'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_15576_4353)'>
        <path
          d='M14.6776 12.9296C15.888 11.278 16.4301 9.23025 16.1955 7.19607C15.9609 5.1619 14.9669 3.29131 13.4123 1.95855C11.8578 0.625789 9.85733 -0.0708582 7.81119 0.00798323C5.76505 0.0868247 3.82413 0.93534 2.37673 2.38377C0.929335 3.8322 0.0822089 5.77373 0.0048316 7.81993C-0.0725457 9.86613 0.625532 11.8661 1.95941 13.4197C3.29328 14.9733 5.16458 15.966 7.19892 16.1991C9.23326 16.4323 11.2806 15.8887 12.9314 14.6771H12.9301C12.9676 14.7271 13.0076 14.7746 13.0526 14.8209L17.8651 19.6334C18.0995 19.8679 18.4175 19.9998 18.7491 19.9999C19.0807 20 19.3987 19.8684 19.6333 19.634C19.8678 19.3996 19.9997 19.0817 19.9998 18.7501C19.9999 18.4185 19.8683 18.1004 19.6339 17.8659L14.8214 13.0534C14.7767 13.0081 14.7287 12.9664 14.6776 12.9284V12.9296ZM15.0001 8.12464C15.0001 9.02748 14.8223 9.92147 14.4768 10.7556C14.1313 11.5897 13.6249 12.3476 12.9865 12.986C12.3481 13.6244 11.5902 14.1308 10.7561 14.4763C9.92198 14.8218 9.02798 14.9996 8.12515 14.9996C7.22231 14.9996 6.32831 14.8218 5.4942 14.4763C4.66008 14.1308 3.90219 13.6244 3.26379 12.986C2.62538 12.3476 2.11898 11.5897 1.77347 10.7556C1.42797 9.92147 1.25015 9.02748 1.25015 8.12464C1.25015 6.30127 1.97447 4.55259 3.26379 3.26328C4.5531 1.97397 6.30178 1.24964 8.12515 1.24964C9.94851 1.24964 11.6972 1.97397 12.9865 3.26328C14.2758 4.55259 15.0001 6.30127 15.0001 8.12464Z'
          fill='#CED4DA'
        />
      </g>
      <defs>
        <clipPath id='clip0_15576_4353'>
          <rect width='20' height='20' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );

export default Magnifier;