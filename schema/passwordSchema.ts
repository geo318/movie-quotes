import { z } from 'zod';
import { passwordValidation, refinePasswordSchema } from './sharedValidations';

export const passwordSchema = refinePasswordSchema(
  z.object(passwordValidation)
);
