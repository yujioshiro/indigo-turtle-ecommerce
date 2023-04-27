import { Response } from 'express';
import { AuthedRequest } from '../../types/auth';
import { insertProductSchema } from '../../validation/products/insertProductSchema';
import prisma from '../../prisma';

export const insertProduct = async (req: AuthedRequest, res: Response) => {
  const parsedProduct = insertProductSchema.safeParse(req.body);

  if (!parsedProduct.success) {
    return res.status(400).json({ errors: parsedProduct.error.issues });
  }

  const toInsert = parsedProduct.data;
  const userId = req.user.id;

  const newProduct = await prisma.product.create({
    data: { ...toInsert, userId },
  });

  res.status(201).json(newProduct);
};
