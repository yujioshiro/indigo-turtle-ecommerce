import { Prisma, PrismaClient } from '@prisma/client';
import passport from 'passport';

import app from './app';
import config from './config/envConfig';
import { createUserStrategyConfig } from './config/createUserStrategyConfig';

const { PORT } = config;

(async () => {
  const prisma = new PrismaClient();
  passport.use(await createUserStrategyConfig(prisma));

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();

// (async () => {
//   const url = config.DATABASE_URL;
//   const publickey = config.PUBLIC_ANON_KEY;

//   if (url === undefined || publickey === undefined)
//     console.error('Error: URL is undefined.');
//   else {
//     const supabase = createClient(url, publickey);
//     const { data, error } = await supabase.from('countries').select();
//     if (error) {
//       console.error(error);
//       return;
//     }

//     console.log(data);
//   }
// })();
