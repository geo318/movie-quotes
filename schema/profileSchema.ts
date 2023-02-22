import { z } from 'zod';
import {
  validateImage,
  passwordValidation,
  refinePasswordSchema,
} from './sharedValidations';

export const profileSchema = refinePasswordSchema(
  z
    .object({
      avatar: validateImage,
      username: z
        .string()
        .min(3, { message: 'err_username_req' })
        .regex(/[a-z0-9]{3,15}/, 'err_username_inc'),
      ...passwordValidation,
    })
    .partial()
);
