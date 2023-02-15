import {
  Avatar,
  Bin,
  Button,
  Divider,
  FormWrapper,
  ImageUpload,
  Img,
  InputText,
  Label,
  Modal,
  ModalLoadingOverlay,
  Pen,
  Photo,
  Post,
  Textarea,
  useMovieQuote,
} from 'components';
import { getImage, loadText } from 'helpers';
import Link from 'next/link';
import { FC } from 'react';
import { FeedData, Movie } from 'types';
import { useEditQuote } from './useEditQuote';

const EditQuote: FC<{ refetch: () => {} }> = ({ refetch }) => {
  const {
    handleQuoteDelete,
    isLoading,
    schema,
    onSubmit,
    user,
    handleImage,
    image,
    lang,
    t,
    quote,
  } = useEditQuote(refetch);

  return (
    <Modal
      z
      containerStyle='!items-start lg:mt-28 !lg:max-w-[60rem]'
      className='lg:min-w-[60rem] !bg-app-black-dark !px-0 !py-6 !z-50 relative'
    >
      <FormWrapper schema={schema} onSubmit={onSubmit} fill>
        {isLoading && <ModalLoadingOverlay admin />}
        <div className='px-8 mb-6 relative'>
          <div className='absolute'>
            <div
              className='py-1 pr-1 cursor-pointer flex items items-center text-base gap-2 '
              onClick={() => handleQuoteDelete(quote?.id)}
            >
              <Bin />
              <span className='pt-1'>delete</span>
            </div>
          </div>
          <h3 className='lg:text-2xl text-xl text-center'>{t('editQuote')}</h3>
        </div>
        <Divider className='border-opacity-20ზ„' />

        <div className='px-8'>
          <Avatar
            img={getImage(user?.avatar || '')}
            text={user?.username}
            size={60}
            className='w-[3.75rem] h-[3.75rem]'
            containerStyle='mt-[1.875rem] items-center mb-6'
            loading={!user?.id}
          />
        </div>
        <div className='px-8 flex flex-col gap-6'>
          <Textarea
            name='quote_title_en'
            label='Eng'
            labelStyle='text-app-dark-gray'
            value={quote?.quote_title.en}
          ></Textarea>
          <Textarea
            name='quote_title_ka'
            label='ქარ'
            labelStyle='text-app-dark-gray'
            value={quote?.quote_title.ka}
          />
          <div className='relative flex justify-center items-center'>
            <div className='absolute z-20 '>
              <ImageUpload
                reUpload
                handleImage={handleImage}
                name='quote_image'
              />
            </div>

            <Img
              path={quote?.quote_image}
              className='w-full aspect-9/5 rounded-ten'
              image={image}
            />
          </div>
          <Button
            text={t('post') as string}
            style='buttonRed'
            className='w-full mt-4 !text-xl'
            disabled={isLoading}
          />
        </div>
      </FormWrapper>
    </Modal>
  );
};

export default EditQuote;
