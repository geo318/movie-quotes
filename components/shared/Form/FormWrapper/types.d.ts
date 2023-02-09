import { Props, SubmitDataProps } from 'types';
import { FormSubmitUnionProps } from 'types/formTypes';
import { ZodObject } from 'zod';

interface FormWrapperProps extends Props {
  schema?: ZodObject;
  onSubmit?: <T>(data: obj<T>) => Promise<void>;
  fill?: boolean;
  multipart?: boolean;
}
