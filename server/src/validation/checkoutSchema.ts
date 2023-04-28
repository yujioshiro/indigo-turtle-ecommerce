import { z } from 'zod';

export const checkoutSchema = z.object({
  products: z
    .object({
      name: z.string(),
      userId: z.string().nullable(),
      quantity: z.string(),
    })
    .array(),
});
