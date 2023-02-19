import {
  Avatar,
  Button,
  Divider,
  FormWrapper,
  ImageUpload,
  Img,
  Input,
  InputText,
  Label,
  Modal,
  ModalLoadingOverlay,
  Textarea,
} from 'components';
import { getImage, loadText } from 'helpers';
import Image from 'next/image';
import { FC } from 'react';
import { Movie } from 'types';
import { useAddEmail } from './useAddEmail';

const AddEmail: FC = () => {
  const { isLoading, schema, onSubmit, user, handleImage, image, lang, t } =
    useAddEmail();

  return (
    <Modal
      z
      containerStyle='!items-start lg:mt-28 !lg:max-w-[60rem]'
      className='lg:min-w-[38.5rem] !bg-app-black-dark !px-0 !py-10 !z-50'
    >
      <FormWrapper schema={schema} onSubmit={onSubmit} fill>
        {isLoading && <ModalLoadingOverlay admin />}
        <div className='px-8 mb-6'>
          <h3 className='lg:text-2xl text-xl text-left'>{t('addNewEmail')}</h3>
        </div>
        <Divider />

        <div className='flex flex-col px-8 mt-14'>
          <div className='flex w-full flex-col gap-6'>
            <Input
              name='email'
              full
              placeholder='Enter new email'
              label='New Email'
            />
          </div>

          <Button
            text={t('add') as string}
            style='buttonRed'
            className='ml-auto mt-10 !text-xl'
            disabled={isLoading}
          />
        </div>
      </FormWrapper>
    </Modal>
  );
};

export default AddEmail;
