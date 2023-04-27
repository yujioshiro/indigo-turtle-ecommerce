import { z } from 'zod';

export const loginFieldSchema = () =>
  z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });
