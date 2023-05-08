import { Response, Request } from 'express';
import prisma from '../../prisma';

export const getProductById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id))
    return res
      .status(400)
      .json({ error: 'Invalid param, :id must be a number' });

  const product = await prisma.product.findUnique({ where: { id } });

  if (!product) return res.status(404).json({ error: 'Product not found' });
  return res.json(product);
};
