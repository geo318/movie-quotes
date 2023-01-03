import { useHome } from '.';
import Image from 'next/image';

const Slides = () => {
  const { slides } = useHome();
  return (
    <main>
      {slides.map((slide, index) => (
        <article
          key={slide.id}
          className={`sticky top-0 h-screen flex justify-center items-center ${
            index === 0 && 'mt-[-90px]'
          }`}
        >
          <Image
            sizes='(max-width: 700px) 50vw, 90vw'
            src={slide.img}
            alt={slide.quote}
            fill
            className='object-cover -z-10'
          />
          <div className='grid grid-cols-12 text-left w-full'>
            <div className='col-span-1 col-start-2 flex justify-end'>
              <div className='border-t-2 border-white mt-8 w-12 mr-5' />
            </div>
            <p className='text-5xl font-bold leading-normal col-span-7 col-start-3'>
              {slide.quote}
            </p>
            <p className='text-base font-bold leading-6 col-span-7 col-start-3 text-[#D9D9D9] mt-5'>
              {slide.film}
            </p>
          </div>
        </article>
      ))}
    </main>
  );
};
export default Slides;
