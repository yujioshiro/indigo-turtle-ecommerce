import { Product } from '@prisma/client';
import { z } from 'zod';

export const checkoutSchema = z.object({
  products: z
    .object({
      name: z.string(),
      userId: z.number(), // WARNING: this should be id, but because frontend is already using userId, we can't really change the api... so best to convert userId to id in controller
      quantity: z.number(),
    })
    .array(),
});
