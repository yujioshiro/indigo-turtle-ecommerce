<<<<<<< HEAD


const PRODUCTION_URL = 'https://drab-pink-dalmatian-gear.cyclic.app'
const LOCAL_URL = 'http://localhost:3001/api'

export default {
    PRODUCTION_URL,
    LOCAL_URL
}
=======
export const SERVER_URL =
  process.env.NODE_ENV === 'development'
    ? 'localhost:3001'
    : 'https://drab-pink-dalmatian-gear.cyclic.app';
>>>>>>> 1277bd02188cab318c7022e7f20bc16bc53c9a65
