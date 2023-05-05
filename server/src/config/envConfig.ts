import { config } from 'dotenv';

config();

const mode = process.env.NODE_ENV;
const LOCAL_DATABASE_URL = process.env.LOCAL_DATABASE_URL;
const ONLINE_DATABASE_URL = process.env.ONLINE_DATABASE_URL;
const PORT = process.env.PORT;
const CLIENT_PORT = process.env.CLIENT_PORT;
const SALT_ROUNDS = Number(process.env.SALT_ROUNDS);
const PUBLIC_ANON_KEY = process.env.PUBLIC_ANON_KEY;
const SESSION_SECRET = process.env.SESSION_SECRET;

const STRIPE_TEST_KEY = process.env.STRIPE_TEST_KEY;

export default {
  DATABASE_URL: ONLINE_DATABASE_URL,
  PUBLIC_ANON_KEY,
  PORT,
  CLIENT_PORT,
  SALT_ROUNDS,
  SESSION_SECRET,
  SERVER_URL:
    mode === 'development'
      ? process.env.DEVELOPMENT_URL
      : process.env.PRODUCTION_URL,
  CLIENT_URL:
    mode === 'development'
      ? process.env.DEVELOPMENT_CLIENT_URL
      : process.env.PRODUCTION_CLIENT_URL,
  STRIPE_TEST_KEY,
  STRIPE_WEBHOOK_SECRET:
    mode === 'development'
      ? process.env.STRIPE_CLI_WEBHOOK_SECRET
      : process.env.STRIPE_TEST_WEBHOOK_SECRET,
};
