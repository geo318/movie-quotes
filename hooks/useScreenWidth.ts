import { useEffect, useState } from 'react';

export const useScreenWidth = (screen = 1024) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(() => window.innerWidth < screen);
  }, [setIsMobile, screen]);

  return isMobile;
};
