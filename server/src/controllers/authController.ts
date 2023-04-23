import { Request, Response } from 'express';
import { registerSchema } from '../validation/authSchema';
import prisma from '../prisma';
import { NewEntryUser } from '../types/authTypes';
import { excludeFields } from '../utils/prismaUtils';
import bcrypt from 'bcrypt';

export const register = async (req: Request, res: Response) => {
  const parsedUser = registerSchema.safeParse(req.body);

  if (!parsedUser.success) {
    return res.status(400).json({ errors: parsedUser.error.issues });
  }

  const toBeRegistered: NewEntryUser = parsedUser.data;

  const duplicateUsers = await prisma.user.findMany({
    where: {
      OR: [
        {
          username: toBeRegistered.username,
        },
        {
          email: toBeRegistered.email,
        },
      ],
    },
  });

  if (duplicateUsers.length > 0) {
    return res.status(409).json({ error: 'Username or email already used' });
  }

  const passwordHash = await bcrypt.hash(
    toBeRegistered.password,
    Number(process.env.SALT_ROUNDS)
  );

  const newUser = await prisma.user.create({
    data: {
      ...toBeRegistered,
      password: passwordHash,
    },
  });

  const newUserNonSensitive = excludeFields(newUser, ['password']);

  return res.status(201).json(newUserNonSensitive);
};
