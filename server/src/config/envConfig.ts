import { config } from 'dotenv';

config();

const mode = process.env.NODE_ENV;

const LOCAL_DATABASE_URL = process.env.LOCAL_DATABASE_URL;
const ONLINE_DATABASE_URL = process.env.ONLINE_DATABASE_URL;
const PORT = process.env.PORT;
const SALT_ROUNDS = Number(process.env.SALT_ROUNDS);
const PUBLIC_ANON_KEY = process.env.PUBLIC_ANON_KEY;

export default {
  DATABASE_URL:
    mode === 'development' ? ONLINE_DATABASE_URL : ONLINE_DATABASE_URL,
  PUBLIC_ANON_KEY,
  PORT,
  SALT_ROUNDS,
};
