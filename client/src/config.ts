export const SERVER_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001/api'
    : 'https://drab-pink-dalmatian-gear.cyclic.app/api';