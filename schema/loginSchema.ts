import { z } from 'zod';
import {
  emailValidation,
  passwordValidationWithoutConfirmation,
  usernameValidation,
} from './sharedValidations';

export const loginSchema = z.object({
  email: z
    .string()
    .regex(
      /(^[a-z0-9]+$)|(^[a-z0-9]+(\.|[a-z0-9])[a-z0-9]+)(@[a-z0-9]+\.([a-z0-9]+))+/,
      'shared:invalidUsernameOrEmail'
    ),
  ...passwordValidationWithoutConfirmation,
  remember_me: z.coerce.boolean().optional(),
});
