import { useTranslation } from 'next-i18next';
import { Interstellar, LordOfTheRings, RoyalTenenbaums } from 'public';

export const useSlides = () => {
  const { t } = useTranslation('home');
  const slides = [
    {
      img: Interstellar,
      quote: 'interstellar',
      id: 1,
      film: 'Interstellar, 2014',
      bg: 'lg:bg-app-slide-one',
    },
    {
      img: RoyalTenenbaums,
      quote: 'tennenbaums',
      id: 2,
      film: 'The Royal Tenenbaums, 2001 ',
      bg: 'lg:bg-app-slide-two',
    },
    {
      img: LordOfTheRings,
      quote: 'lordOfTheRings',
      id: 3,
      film: 'The Lord of the Rings, 2003',
      bg: 'lg:bg-app-slide-three',
    },
  ];
  return { slides, t };
};
