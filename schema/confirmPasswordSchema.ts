import { z } from 'zod';
import { passwordValidation, refinePasswordSchema } from './sharedValidations';

export const confirmPasswordSchema = refinePasswordSchema(
  z.object({
    token: z.string(),
    email: z.string(),
    ...passwordValidation,
  })
);
