import {
  Avatar,
  Button,
  Divider,
  FormWrapper,
  ImageUpload,
  Img,
  Modal,
  ModalLoadingOverlay,
  MultipleSelect,
  Textarea,
} from 'components';
import { getImage } from 'helpers';
import { FC } from 'react';
import { useNewMovie } from './useNewMovie';

const NewMovie: FC<NewMovieProps> = ({ movie, refetch }) => {
  const { isLoading, schema, onSubmit, user, handleImage, image, genres, t } =
    useNewMovie(movie?.id, refetch);

  return (
    <Modal
      z
      containerStyle='!items-start lg:mt-28 !lg:max-w-[60rem]'
      className='lg:min-w-[60rem] !bg-app-black-dark !px-0 !py-10 !z-50'
    >
      <FormWrapper schema={schema} onSubmit={onSubmit} fill>
        {isLoading && <ModalLoadingOverlay admin />}
        <div className='px-8 mb-6'>
          <h3 className='lg:text-2xl text-xl text-center'>{t('writeQuote')}</h3>
        </div>
        <Divider />

        <div className='px-8'>
          <Avatar
            img={getImage(user?.avatar || '')}
            text={user?.username}
            size={60}
            className='w-[3.75rem] h-[3.75rem]'
            containerStyle='mt-[1.875rem] items-center mb-6'
            loading={!user?.id}
          />
          <div className='flex flex-col gap-6'>
            <Textarea
              name='movie_title_en'
              placeholder='Movie name'
              label='Eng'
              inputStyle='min-h-[3rem] !text-xl pl-4 resize-none'
              labelStyle='!text-xl text-app-dark-gray top-[.6rem]'
              value={movie?.movie_title?.en}
            />
            <Textarea
              name='movie_title_ka'
              placeholder='ფილმის სახელი'
              label='ქარ'
              inputStyle='min-h-[3rem] !text-xl pl-4 resize-none'
              labelStyle='!text-xl text-app-dark-gray top-[.6rem]'
              value={movie?.movie_title?.ka}
            />

            <MultipleSelect genres={genres} selected={movie?.genres} />
            <Textarea
              name='director_en'
              placeholder='Director'
              label='Eng'
              inputStyle='min-h-[3rem] !text-xl pl-4 resize-none'
              labelStyle='!text-xl text-app-dark-gray top-[.6rem]'
              value={movie?.director.en}
            />
            <Textarea
              name='director_ka'
              placeholder='რეჟისორი'
              label='ქარ'
              inputStyle='min-h-[3rem] !text-xl pl-4 resize-none'
              labelStyle='!text-xl text-app-dark-gray top-[.6rem]'
              value={movie?.director.ka}
            />
            <Textarea
              name='description_en'
              placeholder='Movie description'
              label='Eng'
              rows={3}
              labelStyle='!text-xl text-app-dark-gray'
              value={movie?.description.en}
            />
            <Textarea
              name='description_ka'
              placeholder='ფილმის აღწერა'
              label='ქარ'
              rows={3}
              labelStyle='!text-xl text-app-dark-gray'
              value={movie?.description.ka}
            />
            <Textarea
              name='year'
              placeholder='წელი'
              inputStyle='min-h-[3rem] !text-xl pl-4 resize-none'
              labelStyle='!text-xl text-app-dark-gray top-[.6rem]'
              value={movie?.year}
            />
            <Textarea
              name='budget'
              placeholder='ბიუჯეტი'
              inputStyle='min-h-[3rem] !text-xl pl-4 resize-none'
              labelStyle='!text-xl text-app-dark-gray top-[.6rem]'
              value={movie?.budget}
            />
            <>
              {!movie ? (
                <ImageUpload
                  name='movie_image'
                  handleImage={handleImage}
                  image={image}
                />
              ) : (
                <div className='relative flex justify-center items-center'>
                  <div className='absolute z-20 '>
                    <ImageUpload
                      reUpload
                      handleImage={handleImage}
                      name='movie_image'
                    />
                  </div>

                  <Img
                    path={movie?.movie_image}
                    className='w-full aspect-9/5 rounded-ten'
                    image={image}
                  />
                </div>
              )}
            </>
          </div>

          <Button
            text={t('post') as string}
            style='buttonRed'
            className='w-full mt-10 !text-xl'
            disabled={isLoading}
          />
        </div>
      </FormWrapper>
    </Modal>
  );
};

export default NewMovie;
