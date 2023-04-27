import express from 'express';
import session, { SessionOptions } from 'express-session';
import registrationRoute from './routes/registrationRoute';
import productsRoute from './routes/productsRouter';
import loginRoute from './routes/loginRoute';
import passport from 'passport';
import { createUserStrategyConfig } from './config/createUserStrategyConfig';
import prisma from 'prisma';
import config from './config/envConfig';
import cookieParser from 'cookie-parser';

const { PORT } = config;

const sessionOptions: SessionOptions = {
  secret: 'BlogSecret',
  resave: false,
  saveUninitialized: false,
};

const startApp = async () => {
  const app = express();

  app.use(express.json());
  app.use(session(sessionOptions));
  app.use(cookieParser());

  // passport
  app.use(passport.initialize());
  app.use(passport.session());
  passport.use(await createUserStrategyConfig());
  passport.serializeUser((user, done) => done(null, user));
  passport.deserializeUser(async (email: string, done) => {
    const user = (await prisma.user.findMany()).filter(
      (user) => user.email === email
    )[0];

    if (user) return done(null, user);
    else return done(null, { message: 'User not found' });
  });

//routes
app.use('/api/register', registrationRoute);
app.use('/api/products/', productsRoute);
    app.use('/api/login', loginRoute);
  //routes
  app.use('/api/register', registrationRoute);

  app.use('/api/login', loginRoute);

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

export default startApp;
