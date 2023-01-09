import { register, fetchCSRFToken, sendEmail } from 'services';
import { z } from 'zod';

export const useRegister = () => {
  const schema = z
    .object({
      username: z
        .string()
        .min(3, { message: 'Username is required' })
        .regex(/[a-z0-9]{3,15}/, 'Invalid username'),
      email: z.string().min(1, { message: 'Email is required' }).email(),
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

  const onSubmit = async (data: {
    [key: string]: string | number | boolean;
  }) => {
    const rez = await fetchCSRFToken();
    console.log(rez);
    const res = await register(data);
    console.log(res);
    const rezz = await sendEmail();
    console.log(rezz);
  };
  return { schema, onSubmit };
};
