import { z } from 'zod';
import {
  validateEnglish,
  validateGeorgian,
  validateImage,
} from './sharedValidations';

const quoteSchemaObj = {
  quote_title_en: validateEnglish,
  quote_title_ka: validateGeorgian,
  quote_image: validateImage,
};

const editQuoteSchema = z.object({ ...quoteSchemaObj }).partial();

const addQuoteSchema = z.object({
  ...quoteSchemaObj,
  movie_id: z.number().min(1, { message: 'shared:selectMovie' }),
});

export { editQuoteSchema, addQuoteSchema };
