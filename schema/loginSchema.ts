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
      /(^[a-z0-9]{3,15}$)|(^[a-z0-9]{2,20}?(\.)[a-z0-9]{2,20})(@[a-z0-9]{2,20}\.([a-z0-9]{2,4}))+/,
      'shared:invalidUsernameOrEmail'
    ),
  ...passwordValidationWithoutConfirmation,
  remember_me: z.coerce.boolean().optional(),
});
