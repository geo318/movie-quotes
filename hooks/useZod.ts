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

  const MAX_IMAGE_SIZE = 500000;
  const ACCEPTED_MIME_TYPES = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
  ];
  const validateImage = z.instanceof(File);

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
