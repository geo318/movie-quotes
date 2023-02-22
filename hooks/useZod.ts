import { useTranslation } from 'next-i18next';
import { z } from 'zod';

export const useZod = () => {
  const { t } = useTranslation(['shared', 'home']);

  const validateGeorgian = z
    .string()
    .regex(
      new RegExp('^[ა-ჰ0-9.,!@#$%^&*()_+-;\':"|,.<>? ]+$'),
      t('useGeorgian') as string
    );
  const validateEnglish = z
    .string()
    .regex(
      new RegExp('^[a-zA-Z0-9.,!@#$%^&*()_+-;\':"|,.<>? ]+$'),
      t('useLatin') as string
    );

  const MAX_FILE_SIZE = 2000000;
  const ACCEPTED_MIME_TYPES = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
  ];
  const validateImage = z
    .any()
    .refine((file) => !!file, t('imageRequired') as string)
    .refine((file) => file?.size <= MAX_FILE_SIZE, t('max2MB') as string)
    .refine(
      (file) => ACCEPTED_MIME_TYPES.includes(file?.type),
      t('mimes') as string
    );

  const quoteSchemaObj = {
    quote_title_en: validateEnglish,
    quote_title_ka: validateGeorgian,
    quote_image: validateImage,
  };

  const editQuoteSchema = z.object({ ...quoteSchemaObj }).partial();

  const addQuoteSchema = z.object({
    ...quoteSchemaObj,
    movie_id: z.number().min(1, { message: t('selectMovie') as string }),
  });

  const movieSchemaObj = {
    movie_title_en: validateEnglish,
    movie_title_ka: validateGeorgian,
    genres: z.string().refine(
      (value: string) => {
        try {
          return JSON.parse(value)?.length > 0 && true;
        } catch (error) {
          return false;
        }
      },
      { message: t('') as string }
    ),
    director_en: validateEnglish,
    director_ka: validateGeorgian,
    description_en: validateEnglish,
    description_ka: validateGeorgian,
    movie_image: validateImage,
    budget: z.coerce
      .number()
      .min(1000, { message: t('noLower1000') as string }),
    year: z.coerce
      .number()
      .min(1895, { message: t('noLower1895') as string })
      .max(new Date().getFullYear(), {
        message: t('noMoreThenCurrent') as string,
      }),
  };

  const addMovieSchema = z.object(movieSchemaObj);
  const editMovieSchema = addMovieSchema.partial();
  const emailValidation = {
    email: z
      .string()
      .min(1, { message: t('emailRequired') as string })
      .email(t('incorrectEmail') as string),
  };

  const passwordValidation = {
    password: z
      .string()
      .min(1, { message: t('err_password_req') as string })
      .regex(/^[a-z0-9]{8,15}$/, t('err_password_inc') as string),
    repeat_password: z
      .string()
      .min(1, { message: t('err_password_repeat') as string }),
  };
  const usernameValidation = z
    .string()
    .min(3, { message: t('err_username_req') as string })
    .regex(/[a-z0-9]{3,15}/, t('err_username_inc') as string);

  const usernameSchema = z.object({ username: usernameValidation });

  const emailSchema = z.object(emailValidation);

  const passwordSchema = z
    .object(passwordValidation)
    .refine(
      (data) => (data.password ? data.password === data.repeat_password : true),
      {
        message: t('err_password_match') as string,
        path: ['repeat_password'],
      }
    );
  const profileSchema = z
    .object({
      avatar: validateImage,
      username: z
        .string()
        .min(3, { message: t('err_username_req') as string })
        .regex(/[a-z0-9]{3,15}/, t('err_username_inc') as string),
      password: z
        .string()
        .min(1, { message: t('err_password_req') as string })
        .regex(/^[a-z0-9]{8,15}$/, t('err_password_inc') as string),
      repeat_password: z
        .string()
        .min(1, { message: t('err_password_repeat') as string }),
    })
    .partial()
    .refine(
      (data) => (data.password ? data.password === data.repeat_password : true),
      {
        message: t('err_password_match') as string,
        path: ['repeat_password'],
      }
    );

  return {
    editQuoteSchema,
    addQuoteSchema,
    addMovieSchema,
    editMovieSchema,
    usernameSchema,
    emailSchema,
    profileSchema,
    passwordSchema,
  };
};
