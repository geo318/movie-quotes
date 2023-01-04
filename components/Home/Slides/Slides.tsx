import { useSlides } from './useSlides';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const Slides = () => {
  const { slides } = useSlides();
  const { t } = useTranslation('home');
  return (
    <>
      {slides.map((slide, index) => (
        <article
          key={slide.id}
          className={`lg:sticky relative top-0 lg:h-screen max-w-screen justify-center items-center ${
            slide.id === 1 && 'lg:mt-[-10vh]'
          }`}
        >
          <Image
            sizes='(max-width: 700px) 50vw, 90vw'
            src={slide.img}
            alt={slide.quote}
            className='object-cover -z-10 min-h-[33rem] md:min-h-[61rem] max-h-screen'
            {...(slide.id === 1 && { priority: true })}
          />
          <div className='absolute inset-0 flex justify-center items-center'>
            <div className='grid grid-cols-12 text-left w-full'>
              <div className='col-span-1 col-start-2 flex justify-end'>
                <div className='border-t-2 border-white lg:mt-8 mt-4 w-12 mr-5' />
              </div>
              <p className='lg:text-5xl text-xl font-bold lg:leading-normal leading-7 lg:col-span-7 col-span-9 col-start-3'>
                {t(slide.quote)}
              </p>
              <p className='text-base font-bold leading-6 col-span-7 col-start-3 text-[#D9D9D9] mt-5'>
                {slide.film}
              </p>
            </div>
          </div>
        </article>
      ))}
    </>
  );
};
export default Slides;
