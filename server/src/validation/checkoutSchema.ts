import { Product } from '@prisma/client';
import { z } from 'zod';

export const checkoutSchema = z.object({
  products: z
    .object({
      name: z.string(),
      id: z.number(),
      quantity: z.number(),
    })
    .array(),
});
