import { z } from 'zod';
import { emailValidationObj } from './sharedValidations';

export const emailSchema = z.object(emailValidationObj);
