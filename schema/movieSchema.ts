import { z } from 'zod';
import {
  validateEnglish,
  validateGeorgian,
  validateImage,
} from './sharedValidations';

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
    { message: 'shared:genreRequired' }
  ),
  director_en: validateEnglish,
  director_ka: validateGeorgian,
  description_en: validateEnglish,
  description_ka: validateGeorgian,
  movie_image: validateImage,
  budget: z.coerce.number().min(1000, { message: 'shared:noLower1000' }),
  year: z.coerce
    .number()
    .min(1895, { message: 'shared:noLower1895' as string })
    .max(new Date().getFullYear(), {
      message: 'shared:noMoreThenCurrent',
    }),
};

const addMovieSchema = z.object(movieSchemaObj);
const editMovieSchema = addMovieSchema.partial();

export { addMovieSchema, editMovieSchema };
