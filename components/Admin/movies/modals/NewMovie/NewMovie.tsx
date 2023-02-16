import {
  Avatar,
  Button,
  Divider,
  FormWrapper,
  ImageUpload,
  Modal,
  ModalLoadingOverlay,
  MultipleSelect,
  Textarea,
} from 'components';
import { getImage } from 'helpers';
import { FC } from 'react';
import { useNewMovie } from './useNewMovie';

const NewMovie: FC = () => {
  const { isLoading, schema, onSubmit, user, handleImage, image, genres, t } =
    useNewMovie();

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
            />
            <Textarea
              name='movie_title_ka'
              placeholder='ფილმის სახელი'
              label='ქარ'
              inputStyle='min-h-[3rem] !text-xl pl-4 resize-none'
              labelStyle='!text-xl text-app-dark-gray top-[.6rem]'
            />

            <MultipleSelect genres={genres} />
            <Textarea
              name='director_en'
              placeholder='Director'
              label='Eng'
              inputStyle='min-h-[3rem] !text-xl pl-4 resize-none'
              labelStyle='!text-xl text-app-dark-gray top-[.6rem]'
            />
            <Textarea
              name='director_ka'
              placeholder='რეჟისორი'
              label='ქარ'
              inputStyle='min-h-[3rem] !text-xl pl-4 resize-none'
              labelStyle='!text-xl text-app-dark-gray top-[.6rem]'
            />
            <Textarea
              name='description_en'
              placeholder='Movie description'
              label='Eng'
              rows={3}
              labelStyle='!text-xl text-app-dark-gray'
            />
            <Textarea
              name='description_ka'
              placeholder='ფილმის აღწერა'
              label='ქარ'
              rows={3}
              labelStyle='!text-xl text-app-dark-gray'
            />
            <Textarea
              name='year'
              placeholder='წელი'
              inputStyle='min-h-[3rem] !text-xl pl-4 resize-none'
              labelStyle='!text-xl text-app-dark-gray top-[.6rem]'
            />
            <Textarea
              name='budget'
              placeholder='ბიუჯეტი'
              inputStyle='min-h-[3rem] !text-xl pl-4 resize-none'
              labelStyle='!text-xl text-app-dark-gray top-[.6rem]'
            />
            <ImageUpload
              name='movie_image'
              handleImage={handleImage}
              image={image}
            />
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
