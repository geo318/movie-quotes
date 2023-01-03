import {
  RoyalTenenbaums,
  Interstellar,
  LordOfTheRings,
  InterstellarPart,
} from 'public';

export const useHome = () => {
  const slides = [
    {
      img: Interstellar,
      quote: 'You have to leave something behind to go forward',
      id: 1,
      film: 'Interstellar, 2014',
    },
    {
      img: RoyalTenenbaums,
      quote:
        'I think we’re just gonna have to be secretly in love with each other and leave it that',
      id: 2,
      film: 'The Royal Tenenbaums, 2001 ',
    },
    {
      img: LordOfTheRings,
      quote:
        'I see in your eyes the same fear that would take the heart of me...',
      id: 3,
      film: 'The Lord of the Rings, 2003',
    },
  ];
  return { slides, slidePart: InterstellarPart };
};
