import { z } from 'zod';

export const useLogin = () => {
  const schema = z.object({
    email: z.string().min(1, { message: 'Email is required' }).email(),
    password: z
      .string()
      .min(1, { message: 'Password is required' })
      .regex(/^[a-z0-9]{8,15}$/, 'Incorrect password'),
    remember_me: z.boolean(),
  });

  return { schema };
};
