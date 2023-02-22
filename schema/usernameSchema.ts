import { z } from 'zod';
import { usernameValidation } from './sharedValidations';

export const usernameSchema = z.object({ username: usernameValidation });
