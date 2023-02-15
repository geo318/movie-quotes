import { z } from 'zod';

export const useZod = () => {
  const validateGeorgian = z
    .string()
    .regex(
      new RegExp('^[ა-ჰ0-9.,!@#$%^&*()_+-;\':"|,.<>? ]+$'),
      'Please, use Georgian symbols only'
    );
  const validateEnglish = z
    .string()
    .regex(
      new RegExp('^[a-zA-Z0-9.,!@#$%^&*()_+-;\':"|,.<>? ]+$'),
      'Please, use Latin symbols only'
    );

  const validateImage = z
    .instanceof(File)
    .refine((file) => file.name !== '' && file.size !== 0, 'File is required');

  const quoteSchemaObj = {
    quote_title_en: validateEnglish,
    quote_title_ka: validateGeorgian,
    quote_image: validateImage,
  };

  const editQuoteSchema = z.object({ ...quoteSchemaObj }).partial();

  const addQuoteSchema = z.object({
    ...quoteSchemaObj,
    movie_id: z.number().min(1, { message: 'Please, select a movie' }),
  });

  return { editQuoteSchema, addQuoteSchema };
};
