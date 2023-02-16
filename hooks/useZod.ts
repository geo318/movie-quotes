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

  const validateImage = z.any();
  // .refine((file) => file.name !== '' && file.size !== 0, 'File is required');

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
  const movieSchemaObj = {
    movie_title_en: validateEnglish,
    movie_title_ka: validateGeorgian,
    genres: z.string().refine(
      (value: string) => {
        try {
          return JSON.parse(value)?.length > 0 && true;
        } catch (error) {
          return false;
        }
      },
      { message: 'Input must not be empty' }
    ),
    director_en: validateEnglish,
    director_ka: validateGeorgian,
    description_en: validateEnglish,
    description_ka: validateGeorgian,
    movie_image: validateImage,
    budget: z.coerce
      .number()
      .min(1000, { message: 'Lower then $1000 is unrealistic, select more' }),
    year: z.coerce
      .number()
      .min(1895, { message: 'The first film was made in 1895' })
      .max(new Date().getFullYear(), {
        message: `You can't select more then current year`,
      }),
  };
  const addMovieSchema = z.object(movieSchemaObj);
  const editMovieSchema = addMovieSchema.partial();

  return { editQuoteSchema, addQuoteSchema, addMovieSchema, editMovieSchema };
};
