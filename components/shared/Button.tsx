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
      className={`px-4 lg:px-6 py-2 rounded font-normal text-base leading-6 lg:text-xl lg:leading-normal  text-white border
         transition ${style === 'buttonRed' ? buttonRed : ''} 
         ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
