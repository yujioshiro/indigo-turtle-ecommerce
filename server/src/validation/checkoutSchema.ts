import { z } from 'zod';

export const checkoutSchema = z.object({
  products: z
    .object({
      name: z.string(),
      userId: z.number().nullable(),
      quantity: z.number(),
    })
    .array(),
});
