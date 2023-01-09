import { Props } from 'types';
import { ZodObject } from 'zod';

interface FormWrapperProps extends Props {
  schema?: ZodObject;
  onSubmit?: any;
}
