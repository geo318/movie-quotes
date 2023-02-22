import { z } from 'zod';
import {
  usernameValidation,
  emailValidationObj,
  passwordValidation,
  refinePasswordSchema,
} from './sharedValidations';

export const registerSchema = refinePasswordSchema(
  z.object({
    username: usernameValidation,
    ...emailValidationObj,
    ...passwordValidation,
  })
);
