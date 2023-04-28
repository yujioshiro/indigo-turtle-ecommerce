import { Strategy } from 'passport-local';

import { prisma } from '../utils/prisma';

export const createUserStrategyConfig = async () => {
  const users = await prisma.user.findMany();

  return new Strategy(
    {
      usernameField: 'email',
      passwordField: 'passwd',
    },
    (targetEmail, targetPwd, done) => {
      const result = users.filter(
        ({ email, password }) => email === targetEmail && password === targetPwd
      );

      if (result.length > 1)
        return done(null, false, {
          message:
            'Error: There are more than 1 user with the same email and password.',
        });

      if (result.length === 0)
        return done(null, false, { message: 'Error: No user found.' });

      return done(null, result[0]);
    }
  );
};
