import { z } from 'zod';
import {
  usernameValidation,
  emailValidation,
  passwordValidation,
  refinePasswordSchema,
} from './sharedValidations';

export const registerSchema = refinePasswordSchema(
  z.object({
    username: usernameValidation,
    ...emailValidation,
    ...passwordValidation,
  })
);
