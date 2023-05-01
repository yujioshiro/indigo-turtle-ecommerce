// 3rd Party
import express from 'express';
import session, { SessionOptions } from 'express-session';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// 1st Party
import registrationRoute from '@/routes/registrationRoute';
import productsRoute from '@/routes/productsRouter';
import loginRoute from '@/routes/loginRoute';
import checkoutRoute from '@/routes/checkoutRoute';
import { strategy } from '@/middlewares/passport';
import stripeWebhookRoute from '@/routes/stripeWebhookRoute';
import envConfig from '@/config/envConfig';

const { CLIENT_PORT } = envConfig;

const sessionOptions: SessionOptions = {
  secret: 'BlogSecret',
  resave: false,
  saveUninitialized: false,
};

const app = express();

app.use(cors({ origin: `http://localhost:${CLIENT_PORT}`, credentials: true }));
app.use(express.raw({ type: '*/*' }));
app.use(express.json());
app.use(session(sessionOptions));
app.use(cookieParser());

// passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(strategy);

//routes
app.use('/api/register', registrationRoute);
app.use('/api/products', productsRoute);
app.use('/api/login', loginRoute);
app.use('/api/checkout', checkoutRoute);
app.use('/api/stripeWebhook', stripeWebhookRoute);

export default app;
