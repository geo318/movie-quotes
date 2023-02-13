import { useState } from 'react';

export const useComment = () => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow((show) => !show);
  return { show, toggleShow };
};
