import { useTranslation } from 'next-i18next';
import { z } from 'zod';

export const useZod = () => {
  const { t } = useTranslation('errors');

  const validateGeorgian = z
    .string()
    .regex(
      new RegExp('^[ა-ჰ0-9.,!@#$%^&*()_+-;\':"|,.<>? ]+$'),
      'Please, use Georgian symbols only'
    );
  const validateEnglish = z
    .string()
    .regex(
      new RegExp('^[a-zA-Z0-9.,!@#$%^&*()_+-;\':"|,.<>? ]+$'),
      'Please, use Latin symbols only'
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
    .refine((file) => !!file, 'image is required')
    .refine((file) => file?.size <= MAX_FILE_SIZE, 'Max file size is 2MB.')
    .refine(
      (file) => ACCEPTED_MIME_TYPES.includes(file?.type),
      '.jpg, .jpeg, .png and .webp files are accepted.'
    );

  const quoteSchemaObj = {
    quote_title_en: validateEnglish,
    quote_title_ka: validateGeorgian,
    quote_image: validateImage,
  };

  const editQuoteSchema = z.object({ ...quoteSchemaObj }).partial();

  const addQuoteSchema = z.object({
    ...quoteSchemaObj,
    movie_id: z.number().min(1, { message: 'Please, select a movie' }),
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
      { message: 'Input must not be empty' }
    ),
    director_en: validateEnglish,
    director_ka: validateGeorgian,
    description_en: validateEnglish,
    description_ka: validateGeorgian,
    movie_image: validateImage,
    budget: z.coerce
      .number()
      .min(1000, { message: 'Lower then $1000 is unrealistic, select more' }),
    year: z.coerce
      .number()
      .min(1895, { message: 'The first film was made in 1895' })
      .max(new Date().getFullYear(), {
        message: `You can't select more then current year`,
      }),
  };
  const addMovieSchema = z.object(movieSchemaObj);
  const editMovieSchema = addMovieSchema.partial();
  const emailValidation = {
    email: z
      .string()
      .min(1, { message: 'email required' as string })
      .email('Incorrect email' as string),
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
