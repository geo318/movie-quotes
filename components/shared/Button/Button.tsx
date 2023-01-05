import { ButtonProps } from './types';
import { useButton } from './useButton';

const Button = ({ text, className, style }: ButtonProps) => {
  const { buttonRed } = useButton();
  return (
    <button
      className={`px-4 lg:px-6 py-2 rounded font-normal text-base leading-6 lg:text-xl lg:leading-normal  text-white border
         transition ${style === 'buttonRed' ? buttonRed : ''} 
         ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
