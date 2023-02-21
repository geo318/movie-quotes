import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { profileActions } from 'store/profileSlice';
import { RootState } from 'types';
import { useImageUpload } from '../useImageUpload';

export const useProfileImageUpload = ({ name = '' }) => {
  const [image, setImage] = useState('');
  const dispatch = useDispatch();
  const handleImage = (img: string) => {
    setImage(img);
    dispatch(profileActions.setFormActive());
  };

  const formState = useSelector((state: RootState) => state.profile.active);
  useEffect(() => {
    if (!formState) setImage('');
  }, [formState]);

  const {
    t,
    errors,
    register,
    isMobile,
    readImage,
    getRootProps,
    getInputProps,
  } = useImageUpload({
    handleImage,
    name,
  });

  return {
    getInputProps,
    getRootProps,
    readImage,
    isMobile,
    register,
    errors,
    image,
    t,
  };
};
