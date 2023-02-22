import { AxiosPromise } from 'axios';
import { ZodObject } from 'zod';

type UsePageProps = {
  refetch: () => {};
  submitCb: (data: Partial<User>) => AxiosPromise;
  flashMessage: string;
  schema: ZodObject;
};
