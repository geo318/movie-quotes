import { Props, SubmitDataProps } from 'types';
import { ZodObject } from 'zod';

interface FormWrapperProps extends Props {
  schema?: ZodObject;
  onSubmit?: (data: SubmitDataProps) => Promise<void>;
}
