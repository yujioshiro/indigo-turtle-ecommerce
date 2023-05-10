const PRODUCTION_URL = 'https://drab-pink-dalmatian-gear.cyclic.app';
const LOCAL_URL = 'http://localhost:3001/api';

export default {
  PRODUCTION_URL,
  LOCAL_URL,
};
export const SERVER_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001'
    : 'https://drab-pink-dalmatian-gear.cyclic.app';
