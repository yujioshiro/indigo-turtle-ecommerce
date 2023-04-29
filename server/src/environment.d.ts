declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      PORT?: string;
      PWD: string;
      LOCAL_DATABASE_URL: string;
      ONLINE_DATABASE_URL: string;
      PORT: string;
      SALT_ROUNDS: string;
      PUBLIC_ANON_KEY: string;
      STRIPE_TEST_KEY: string;
      SERVER_URL: string;
      DEVELOPMENT_CLIENT_URL: string;
      PRODUCTION_CLIENT_URL: string;
    }
  }
}
