import { Request, Response } from 'express';
import { insertProductSchema } from '../../validation/products/insertProductSchema';
import prisma from '../../prisma';
import { User } from '../../types/auth';

export const insertProduct = async (req: Request, res: Response) => {
  const parsedProduct = insertProductSchema.safeParse(req.body);

  if (!parsedProduct.success) {
    return res.status(400).json({ errors: parsedProduct.error.issues });
  }

  const toInsert = parsedProduct.data;
  const userId = (req.user as User).id;

  const newProduct = await prisma.product.create({
    data: { ...toInsert, userId },
  });

  res.status(201).json(newProduct);
};
