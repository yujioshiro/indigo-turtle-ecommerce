import { z } from 'zod';

export const registerSchema = z
  .object({
    username: z.string().min(3).max(60),
    email: z.string().email(),
    password: z.string().min(8),
    passwordConfirm: z.string().min(8),
    address: z.string().min(3),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ['password'],
    message: 'Password and Password confirmation do not match',
  })
  .transform((data) => {
    return {
      username: data.username,
      email: data.email,
      password: data.password,
      address: data.address,
    };
  });
