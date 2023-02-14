import {
  Avatar,
  Button,
  Divider,
  FormWrapper,
  ImageUpload,
  Img,
  InputText,
  Label,
  Modal,
  ModalLoadingOverlay,
  Textarea,
} from 'components';
import { getImage, loadText } from 'helpers';
import { FC } from 'react';
import { FeedData, Movie } from 'types';
import { useViewQuote } from './useViewQuote';

const ViewQuote: FC<{ quote: FeedData }> = ({ quote }) => {
  const { isLoading, schema, onSubmit, user, handleImage, image, lang, t } =
    useViewQuote();

  return (
    <Modal
      z
      containerStyle='!items-start lg:mt-28 !lg:max-w-[60rem]'
      className='lg:min-w-[60rem] !bg-app-black-dark !px-0 !py-10 !z-50'
    >
      <FormWrapper schema={schema} onSubmit={onSubmit} fill>
        {isLoading && <ModalLoadingOverlay admin />}
        <div className='px-8 mb-6'>
          <h3 className='lg:text-2xl text-xl text-center'>{t('addQuote')}</h3>
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
          {/* <div className='mt-4 mb-7 flex gap-7 items-center'>
            <Img
              path={movie?.movie_image}
              className='aspect-9/5 max-w-[15rem] w-full rounded-xl'
            />
            <div className='flex flex-col gap-5'>
              <h3 className='text-app-yellow text-xl'>
                {loadText(
                  `${movie?.movie_title[lang]} (${movie?.year})`,
                  !movie?.year
                )}
              </h3>
              <Label genres={movie?.genres} className='mt-0' />
              <div className='text-lg'>
                Director: &nbsp;
                {loadText(movie?.director[lang])}
              </div>
            </div>
          </div> */}
          <div className='flex flex-col gap-6'>
            <Textarea
              name='quote_title_en'
              placeholder='"Quote in English."'
              label='Eng'
              rows={2}
            />
            <Textarea
              name='quote_title_ka'
              placeholder='“ციტატა ქართულ ენაზე”'
              label='ქარ'
              rows={2}
            />
            <ImageUpload
              name='quote_image'
              handleImage={handleImage}
              image={image}
            />
            {/* <InputText name='movie_id' type='hidden' value={movie?.id} /> */}
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

export default ViewQuote;
