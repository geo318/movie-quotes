const Button = ({
  text,
  className,
  style,
}: {
  text: string;
  className?: string;
  style?: 'buttonRed';
}) => {
  const buttonRed =
    'border-app-red bg-app-red hover:bg-[#CC0E10] hover:border-[#CC0E10] active:bg-[#B80D0F] active:border-[#F07C84] active:ring-1 active:ring-[#F07C84]';
  return (
    <button
      className={`px-6 py-2 rounded leading-normal font-normal text-xl text-white border
         transition ${style === 'buttonRed' ? buttonRed : ''} 
         ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
