import { useActiveQuery } from 'hooks';

export const useQuoteMenu = () => {
  const { isActive } = useActiveQuery();
  //   const [open, setOpen] = useState(false);
  //   const toggleMenu = () => {
  //     setTimeout(() => {
  //       setOpen((b) => !b);
  //     }, 500);
  //   };
  return { isActive };
};
