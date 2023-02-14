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
  Post,
  Textarea,
} from 'components';
import { getImage, loadText } from 'helpers';
import { FC } from 'react';
import { FeedData, Movie } from 'types';
import { useViewQuote } from './useViewQuote';

const ViewQuote: FC<{ refetch: () => {} }> = ({ refetch }) => {
  const {
    isLoading,
    schema,
    onSubmit,
    user,
    handleImage,
    image,
    lang,
    t,
    quote,
  } = useViewQuote(refetch);

  return (
    <Modal
      z
      containerStyle='!items-start lg:mt-28 !lg:max-w-[60rem]'
      className='lg:min-w-[60rem] !bg-app-black-dark !px-0 !py-10 !z-50'
    >
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
        <Post post={[quote]} modal />
      </div>
    </Modal>
  );
};

export default ViewQuote;
