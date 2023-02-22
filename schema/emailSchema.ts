import { z } from 'zod';
import { emailValidation } from './sharedValidations';

export const emailSchema = z.object(emailValidation);
