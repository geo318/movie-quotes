import { z } from 'zod';

export const useConfirmPassword = () => {
  const schema = z
    .object({
      password: z
        .string()
        .min(1, { message: 'Password is required' })
        .regex(/^[a-z0-9]{8,15}$/, 'Incorrect password'),
      repeat_password: z
        .string()
        .min(1, { message: 'Please, repeat password' }),
    })
    .refine((data) => data.password === data.repeat_password, {
      message: "Passwords don't match",
      path: ['repeat_password'],
    });
  return { schema };
};
