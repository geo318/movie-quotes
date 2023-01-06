import { ButtonProps } from './types';
import { useButton } from './useButton';

const Button = ({ text, className, style, onClick }: ButtonProps) => {
  const { buttonRed } = useButton();
  return (
    <button
      onClick={onClick}
      className={`px-4 lg:px-6 py-2 rounded font-normal text-base leading-6  text-white border
         transition  ${
           style === 'buttonRed'
             ? buttonRed
             : 'active:border-white active:ring-1 active:ring-white'
         } 
         ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
