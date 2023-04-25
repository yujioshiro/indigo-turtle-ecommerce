import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

const PORT = process.env.PORT;
const SALT_ROUNDS = Number(process.env.SALT_ROUNDS);

export default { PORT, SALT_ROUNDS };
