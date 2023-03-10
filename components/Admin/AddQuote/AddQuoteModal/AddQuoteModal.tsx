import {
  Avatar,
  Button,
  Divider,
  FormWrapper,
  ImageUpload,
  Modal,
  ModalLoadingOverlay,
  SelectMovie,
  Textarea,
} from 'components';
import { getImage } from 'helpers';
import { FC } from 'react';
import { useAddQuoteModal } from './useAddQuoteModal';

const AddQuoteModal: FC = () => {
  const { isLoading, schema, onSubmit, user, handleImage, movies, image, t } =
    useAddQuoteModal();

  return (
    <Modal
      z
      containerStyle='!items-start lg:mt-28'
      className='lg:max-w-[60rem] !bg-app-black-dark !px-0 !py-10 !z-50'
    >
      <FormWrapper schema={schema} onSubmit={onSubmit} fill>
        {isLoading && <ModalLoadingOverlay admin />}
        <div className='px-8 mb-6'>
          <h3 className='lg:text-2xl text-xl text-center'>{t('writeQuote')}</h3>
        </div>
        <Divider />

        <div className='px-8'>
          <Avatar
            img={user?.gmail ? user?.avatar : getImage(user?.avatar)}
            text={user?.username}
            size={60}
            className='w-[3.75rem] h-[3.75rem]'
            containerStyle='mt-[1.875rem] items-center mb-6'
            loading={!user?.id}
          />
          <div className='flex flex-col gap-6'>
            <Textarea
              name='quote_title_en'
              placeholder='Create new quote'
              label='Eng'
              rows={2}
            />
            <Textarea
              name='quote_title_ka'
              placeholder='ახალი ციტატა'
              label='ქარ'
              rows={2}
            />
            <ImageUpload
              name='quote_image'
              handleImage={handleImage}
              image={image}
            />
            <SelectMovie movies={movies} />
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

export default AddQuoteModal;
