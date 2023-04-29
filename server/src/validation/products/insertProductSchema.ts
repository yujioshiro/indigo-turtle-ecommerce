import { z } from 'zod';

export const insertProductSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
  price: z.number().min(1).multipleOf(0.01),
  quantity: z.number().min(1),
  image: z.string().optional(),
});
