import { Schema, z } from 'zod';

export const validateGeorgian = z
  .string()
  .min(1, { message: 'shared:noEmpty' })
  .regex(
    new RegExp('^[ა-ჰ0-9.,!@#$%^&*()_+-;\':"|,.<>? ]+$'),
    'shared:useGeorgian'
  );

export const validateEnglish = z
  .string()
  .min(1, { message: 'shared:noEmpty' })
  .regex(
    new RegExp('^[a-zA-Z0-9.,!@#$%^&*()_+-;\':"|,.<>? ]+$'),
    'shared:useLatin'
  );

const MAX_FILE_SIZE = 2000000;
const ACCEPTED_MIME_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

export const validateImage = z
  .any()
  .refine((file) => !!file, 'shared:imageRequired')
  .refine((file) => file?.size <= MAX_FILE_SIZE, 'shared:max2MB')
  .refine((file) => ACCEPTED_MIME_TYPES.includes(file?.type), 'shared:mimes');

export const emailValidation = z
  .string()
  .min(1, { message: 'shared:emailRequired' })
  .email('shared:incorrectEmail');

export const usernameValidation = z
  .string()
  .min(1, { message: 'home:err_username_req' })
  .regex(/^[a-z0-9]{3,15}$/, { message: 'home:err_username_inc' });

export const emailValidationObj = {
  email: emailValidation,
};

export const passwordValidationWithoutConfirmation = {
  password: z
    .string()
    .min(1, { message: 'home:err_password_req' })
    .regex(/^[a-z0-9]{8,15}$/, 'home:err_password_inc'),
};

export const passwordValidation = {
  ...passwordValidationWithoutConfirmation,
  repeat_password: z.string().min(1, { message: 'home:err_password_repeat' }),
};

export const refinePasswordSchema = (schema: Schema) =>
  schema.refine((data) => data.password === data.repeat_password, {
    message: 'home:err_password_match',
    path: ['repeat_password'],
  });
