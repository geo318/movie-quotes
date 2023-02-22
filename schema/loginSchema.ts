import { z } from 'zod';
import {
  emailValidation,
  passwordValidationWithoutConfirmation,
} from './sharedValidations';

export const loginSchema = z.object({
  ...emailValidation,
  ...passwordValidationWithoutConfirmation,
  remember_me: z.coerce.boolean().optional(),
});
