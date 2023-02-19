import { useAuthUser, useGetUser, useLang } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { User } from 'types';
import { z } from 'zod';

export const useProfile = () => {
  useGetUser();
  const { lang } = useLang();
  const { t } = useTranslation('shared');
  const user = useAuthUser();
  const [isFormSubmittable, setIsFormSubmittable] = useState(false);

  const checkFormState = (state: boolean) => setIsFormSubmittable(state);

  const schema = z.object({ user_avatar: z.any() });
  const onSubmit = (data: Partial<User>) => {
    console.log(data);
  };
  return { schema, checkFormState, isFormSubmittable, onSubmit, lang, user, t };
};
