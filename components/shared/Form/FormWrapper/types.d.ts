import { Props } from 'types';
import { ZodObject } from 'zod';

interface FormWrapperProps extends Props {
  schema?: ZodObject;
  onSubmit?: (data: {
    [key: string]: string | number | boolean;
  }) => Promise<void>;
}
