import { z } from 'zod';

export const useForgotPassword = () => {
  const schema = z.object({
    email: z.string().min(1, { message: 'Email is required' }).email(),
  });
  return { schema };
};
