import passport from 'passport';

// Imports without function execution
import config from './config/envConfig';
import { createUserStrategyConfig } from './config/createUserStrategyConfig';

// Imports with function execution
import app from './app';
import { prisma } from './utils/prisma';

app();

// const { PORT } = config;

// (async () => {
//   passport.use(await createUserStrategyConfig());
//   passport.serializeUser((user, done) => done(null, user));
//   passport.deserializeUser(async (email: string, done) => {
//     const user = (await prisma.user.findMany()).filter(
//       (user) => user.email === email
//     )[0];

//     if (user) return done(null, user);
//     else return done(null, { message: 'User not found' });
//   });

//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });
// })();

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
